import { orderService } from "../../services/order/order.service.local"
import { ADD_ORDER, REMOVE_ORDER, SET_ORDERS } from "../reducers/order.reducer"
import { store } from "../store"

export async function loadOrders() {
	try {
		const orders = await orderService.query()
		store.dispatch({ type: SET_ORDERS, orders })
	} catch (err) {
		console.log('OrderActions: err in loadOrders', err)
		throw err
	}
}

export async function addOrder(order) {
	try {
		const addedOrder = await orderService.add(order)
		store.dispatch(getActionAddOrder(addedOrder))
	} catch (err) {
		console.log('OrderActions: err in addOrder', err)
		throw err
	}
}

export async function removeOrder(orderId) {
	try {
		await orderService.remove(orderId)
		store.dispatch(getActionRemoveOrder(orderId))
	} catch (err) {
		console.log('OrderActions: err in removeOrder', err)
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
