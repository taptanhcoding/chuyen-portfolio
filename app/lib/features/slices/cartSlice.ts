

import { createSlice, configureStore } from '@reduxjs/toolkit'


export type Product = any
const counterSlice = createSlice({
  name: 'product',
  initialState: {
    value: {}
  },
  reducers: {
    initializeProduct: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value =   {
        name: ""
      }
    },
    setProductName: (state,action) => {
      state.value.name = action.payload
    }
  }
})

export const { initializeProduct,  setProductName } = counterSlice.actions

export const productReducer = counterSlice.reducer