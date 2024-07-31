import { orderService } from "../../services/order"
import {
  ADD_ORDER,
  REMOVE_ORDER,
  SET_ORDERS,
  UPDATE_ORDER_STATUS,
} from "../reducers/order.reducer"
import { store } from "../store"
import { userService } from "../../services/user"


export async function loadOrders() {
  try {
    const orders = await orderService.query()
    store.dispatch({ type: SET_ORDERS, orders })
  } catch (err) {
    console.log("OrderActions: err in loadOrders", err)
    throw err
  }
}

export async function addOrder(order) {
  try {
    store.dispatch(getActionAddOrder(order))
  } catch (err) {
    console.log("OrderActions: err in addOrder", err)
    throw err
  }
}

export async function removeOrder(orderId) {
  try {
    await orderService.remove(orderId)
    store.dispatch(getActionRemoveOrder(orderId))
  } catch (err) {
    console.log("OrderActions: err in removeOrder", err)
    throw err
  }
}

export async function updateOrderStatus(orderId, status) {
  try {
    const updatedOrder = await orderService.update(orderId, status)
    store.dispatch({ type: UPDATE_ORDER_STATUS, updatedOrder })
  } catch (err) {
    console.log("OrderActions: err in updateOrderStatus", err)
    throw err
  }
}

// Command Creators
export function getActionRemoveOrder(orderId) {
  return { type: REMOVE_ORDER, orderId }
}

export function getActionAddOrder(order) {
  return { type: ADD_ORDER, order }
}
