import {createSlice} from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: []
})

export const orderReducer = orderSlice.reducer
export const orderActions = orderSlice.actions