export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'

const initialState = {
  orders: [],
}

export function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, orders: [...state.orders, action.order] }
    case SET_ORDERS:
      return { ...state, orders: action.orders }

    default:
      return state
  }
}
