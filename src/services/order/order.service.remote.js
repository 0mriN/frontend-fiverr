import { httpService } from "../http.service";
import { userService } from "../user";
const ORDER_KEY = "order"; // This is the endpoint part for your orders API

export const orderService = {
  query,
  getById,
  add,
  update,
};
/* 
function query(filterBy) {
	var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
	return httpService.get(`review${queryStr}`)
} */


  async function query(type) {
    let orders = await httpService.get(ORDER_KEY)
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

  /* 
async function query() {
  try {
    const orders = await httpService.get(ORDER_KEY);
    return orders;
  } catch (error) {
    console.error("Error querying orders:", error);
    throw error;
  }
} */

async function getById(orderId) {
  try {
    const order = await httpService.get(`${ORDER_KEY}/${orderId}`);
    return order;
  } catch (error) {
    console.error(`Error getting order with id ${orderId}:`, error);
    throw error;
  }
}


/* 
async function add({ txt, aboutUserId }) {
  return await httpService.post(`review`, { txt, aboutUserId });
}
 */
async function add(order) {
    console.log('order from service remote', order);
    try {
        const addedOrder = await httpService.post(ORDER_KEY, order);
        return addedOrder;
    } catch (error) {
        console.error('Error adding order:', error);
        throw error;
    }
}

async function update(orderId, status) {
    try {
        const updatedOrder = await httpService.put(`${ORDER_KEY}/${orderId}`, { status });
        return updatedOrder;
    } catch (error) {
        console.error(`Error updating order with id ${orderId}:`, error);
        throw error;
    }
}
