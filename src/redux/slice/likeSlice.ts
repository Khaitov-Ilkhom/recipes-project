import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Recipe} from "../../types";

interface IInitialState {
  products: Recipe[]
}

const initialState: IInitialState = {
  products: JSON.parse(<string>localStorage.getItem("products")) || []
}

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<Recipe>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products = state.products.filter((product) => product.id !== action.payload.id);
      }

      localStorage.setItem("products", JSON.stringify(state.products))
    }
  }
})

export const {addToLiked} = likeSlice.actions;
export default likeSlice.reducer