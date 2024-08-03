// order.service.local.js
import { storageService } from "../async-storage.service"
import { userService } from "../user"
import { makeId } from "../util.service"

const ORDER_KEY = "orderDb"

export const orderService = {
  query,
  getById,
  add,
  update,
}

async function query(type) {
  let orders = await storageService.query(ORDER_KEY)
  const currUser = userService.getLoggedinUser()
  if (type === "dashboard") {
    orders = orders.filter(
      (order) => order.owner.fullname === currUser.fullname
    )
  } else if (type === "orders") {
    orders = orders.filter(
      (order) => order.buyer.fullname === currUser.fullname
    )
  }
  return orders
}

async function update(orderId, status) {
  const order = await storageService.get(ORDER_KEY, orderId)
  order.status = status
  const addedOrder = await storageService.put(ORDER_KEY, order)
  return addedOrder
}

async function getById(orderId) {
  return storageService.get(ORDER_KEY, orderId)
}

async function add(order) {
  const addedOrder = await storageService.post(ORDER_KEY, order)
  return addedOrder
}
