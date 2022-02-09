import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
  active:false
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload]
    },
    check:(state) =>{
      state.active = state.active ? false : true 
    }
  },
})

export const { addTodo,check} = todoSlice.actions
export default todoSlice.reducer