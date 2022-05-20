import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "idle",
};

export const getJokes = createAsyncThunk("jokes/fetchJokes", async () => {
  return await fetch("https://icanhazdadjoke.com/search?limit=10;", {
    headers: {
      Accept: "application/json",
      "User-Agent": "dad jokes",
    },
  }).then((res) => res.json());
});

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    deleteOne: (state, action) => {
      const deletedJokes = state.data.results.filter(
        (joke) => joke.id !== action.payload
      );

      return {
        data: { results: deletedJokes },
      };
    },
    deleteAll: (state) => {
      state.data = {};
    },
    add: {
      reducer(state, action) {
        state.data.results.unshift(action.payload);
      },
      prepare(joke) {
        return {
          payload: {
            id: nanoid(),
            joke,
          },
        };
      },
    },
    update: (state, action) => {
      const updatedJoke = state.data.results.map((joke) => {
        return joke.id === action.payload.id
          ? { ...joke, joke: action.payload.joke }
          : joke;
      });
      return {
        data: { results: updatedJoke },
      };
    },
    addFavourite: (state, action) => {
      const target = state.data.results.map((joke) => {
        return joke.id === action.payload ? { ...joke, favourite: !joke.favourite } : joke;
      });
      return {
        data: { results: target },
      };
    },
  },
  extraReducers: {
    [getJokes.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
  },
});

export const selectAll = (state) => state.jokes.data.results ?? [];
export const selectFavourites = (state) =>
  state.jokes.data.results.filter((joke) => joke.favourite === true) ?? [];

export const { deleteOne, deleteAll, add, update, addFavourite } = jokesSlice.actions;

export default jokesSlice.reducer;
