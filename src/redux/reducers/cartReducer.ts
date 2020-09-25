import { Product } from '../../types/commonTypes'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types'

const initialState = {
  items: [],
}

type CartReducer = {
  items: Product[]
}

export default (state = initialState, action): CartReducer => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: state.items.concat(action.payload),
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id != action.payload),
      }
    default:
      return state
  }
}
