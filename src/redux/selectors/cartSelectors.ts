import { RootReducer } from '../types'
import { Product } from '../../types/commonTypes'
import { createSelector } from 'reselect'
import { getSellingPrice } from '../../MathUtils'

export const selectCartItems = (state: RootReducer): Product[] =>
  state.cart.items

const sumItems = (total, product) => {
  return total + getSellingPrice(product.price, product.discount)
}

export const selectSubtotal = createSelector(selectCartItems, products => {
  return products.reduce(sumItems, 0)
})
