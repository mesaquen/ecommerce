import { ADD_TO_CART, CartActionTypes, CartReducer, REMOVE_FROM_CART } from '../types'

const initialState = {
  items: [],
}

export default (state = initialState, action: CartActionTypes): CartReducer => {
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
