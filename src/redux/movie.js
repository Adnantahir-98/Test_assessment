import { createSlice } from "@reduxjs/toolkit";
import movies from "../data"

export const movieSlice = createSlice({
  name: "movies",
  initialState: { value: movies },
  reducers: {

    addMovie: (state, action) => {
      state.value.push(action.payload);
    },

    updateMovie: (state, action) => {
      state.value.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.title = action.payload.movie
        }
      })
    },
  },
})

export const { addMovie, updateMovie } = movieSlice.actions
export default movieSlice.reducer
