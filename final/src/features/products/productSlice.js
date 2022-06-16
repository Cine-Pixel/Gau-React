import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await fetch("https://fakestoreapi.com/products?limit=10").then(
      (res) => res.json()
    );
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
        return joke.id === action.payload
          ? { ...joke, favourite: !joke.favourite }
          : joke;
      });
      return {
        data: { results: favJokes },
      };
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
  },
});

export const selectProducts = (state) => state.products.data ?? [];

export const {
  deleteJoke,
  deleteAllJokes,
  addJoke,
  updateJoke,
  makeFavourite,
} = productSlice.actions;

export default productSlice.reducer;
