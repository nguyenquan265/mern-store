import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0
}

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { cartProduct } = action.payload
      const alreadyInCart = state.cartItems.find(
        (item) => item.cartID === cartProduct.cartID
      )

      if (alreadyInCart) {
        alreadyInCart.amount += cartProduct.amount
      } else {
        state.cartItems.push(cartProduct)
      }

      state.numItemsInCart += cartProduct.amount
      state.cartTotal += cartProduct.amount * cartProduct.price
      cartSlice.caseReducers.calculateTotals(state)

      toast.success('Item added to cart')
    },
    removeItem: (state, action) => {
      const { cardID } = action.payload
      const alreadyInCart = state.cartItems.find(
        (item) => item.cartID === cardID
      )
      state.cartItems = state.cartItems.filter((item) => item.cartID !== cardID)

      state.numItemsInCart -= alreadyInCart.amount
      state.cartTotal -= alreadyInCart.amount * alreadyInCart.price
      cartSlice.caseReducers.calculateTotals(state)

      toast.error('Item removed from cart')
    },
    editItem: (state, action) => {
      const { cardID, amount } = action.payload
      const alreadyInCart = state.cartItems.find(
        (item) => item.cartID === cardID
      )

      state.numItemsInCart += amount - alreadyInCart.amount
      state.cartTotal += (amount - alreadyInCart.amount) * alreadyInCart.price
      alreadyInCart.amount = amount
      cartSlice.caseReducers.calculateTotals(state)

      toast.success('Cart updated')
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    }
  }
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
