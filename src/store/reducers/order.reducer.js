export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS'

const initialState = {
  orders: [],
}

export function orderReducer(state = initialState, action) {
  switch (action.type) {
      case SET_ORDERS:
          return {
              ...state,
              orders: action.orders
          }
      case ADD_ORDER:
          return {
              ...state,
              orders: [...state.orders, action.order]
          }
      case REMOVE_ORDER:
          return {
              ...state,
              orders: state.orders.filter(order => order._id !== action.orderId)
          }
      case UPDATE_ORDER_STATUS:
          return {
              ...state,
              orders: state.orders.map(order =>
                  order._id === action.updatedOrder._id ? action.updatedOrder : order
              )
          }
      default:
          return state
  }
}