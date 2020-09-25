import { RootReducer } from '../types'
import {Product} from '../../types/commonTypes'
export const selectCartItems = (state: RootReducer): Product[] => state.cart.items
