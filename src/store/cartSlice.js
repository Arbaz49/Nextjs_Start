import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart:[],
  },
  reducers: {
addtocart:function(state,action){
    // console.log(state)
    // console.log(action.payload)
    state.cart=[...state.cart,action.payload];
},
removecart:function(state,action){

}
  },
})

// Action creators are generated for each case reducer function
export const { addtocart} = cartSlice.actions

export default cartSlice.reducer