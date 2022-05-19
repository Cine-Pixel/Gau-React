import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  status: "idle",
};

export const fetchJokes = createAsyncThunk("jokes/fetchJokes", async () => {
  return await fetch("https://icanhazdadjoke.com/search?limit=30;", {
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
    deleteJoke: (state, action) => {
      const deletedJokes = state.data.results.filter(
        (joke) => joke.id !== action.payload
      );

      return {
        data: { results: deletedJokes },
      };
    },
    deleteAllJokes: (state) => {
      state.data = {};
    },
    addJoke: {
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
    updateJoke: (state, action) => {
      const updatedJoke = state.data.results.map((joke) => {
        return joke.id === action.payload.id
          ? { ...joke, joke: action.payload.joke }
          : joke;
      });
      return {
        data: { results: updatedJoke },
      };
    },
    makeFavourite: (state, action) => {
      const favJokes = state.data.results.map((joke) => {
        return joke.id === action.payload ? { ...joke, favourite: true } : joke;
      });
      return {
        data: { results: favJokes },
      };
    },
  },
  extraReducers: {
    [fetchJokes.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
  },
});

export const selectJokes = (state) => state.jokes.data.results ?? [];
export const selectFavJokes = (state) =>
  state.jokes.data.results.filter((joke) => joke.favourite === true) ?? [];

export const {
  deleteJoke,
  deleteAllJokes,
  addJoke,
  updateJoke,
  makeFavourite,
} = jokesSlice.actions;

export default jokesSlice.reducer;
