import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
});

export const counterSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "idle",
  },
  reducers: {
    deleteTodo: (state, action) => {
      const deletedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return {
        todos: deletedTodos,
      };
    },
    deleteAllTodos: () => {
      return { todos: [] };
    },
    toggleTodo: (state, action) => {
      const toggledTodos = state.todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

      return {
        todos: toggledTodos,
      };
    },
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
            userId: Math.floor(Math.random() * 100),
          },
        };
      },
    },
    updateTodo: (state, action) => {
      const updatedTodo = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo;
      });

      return {
        todos: updatedTodo,
      };
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.status = "success";
    },
  },
});

export const selectAllTodos = (state) => state.todos ?? [];

// Action creators are generated for each case reducer function
export const { deleteTodo, deleteAllTodos, toggleTodo, addTodo, updateTodo } =
  counterSlice.actions;

export default counterSlice.reducer;
