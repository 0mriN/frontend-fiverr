import { storageService } from '../async-storage.service'
import { userService } from '../user'
import { makeId } from '../util.service'

const ORDER_KEY = 'orderDb'

export const orderService = {
    getById,
    add,
}

async function getById(orderId) {
    return storageService.get(ORDER_KEY, orderId)
}

async function add(order) {
    const addedOrder = await storageService.post('order', order)
    return addedOrder
}

function _createOrder() {
    return {
        _id: makeId(),
        buyer: userService.getLoggedinUser(),
        seller: 'mini-user',

        gig: {              // mini-gig
            _id: 'i101',
            name: 'Design Logo',
            imgUrl: '',
            price: 20,
        },
        status: 'pending / approved / rejected',
    }
}

// import { storageService } from '../async-storage.service'
// import { userService } from '../user'

// export const reviewService = {
// 	add,
// 	query,
// 	remove,
// }

// function query(filterBy) {
// 	return storageService.query('review')
// }

// async function remove(reviewId) {
// 	await storageService.remove('review', reviewId)
// }

// async function add({ txt, aboutUserId }) {
// 	const aboutUser = await userService.getById(aboutUserId)
// 	const reviewToAdd = {
// 		txt,
// 		byUser: userService.getLoggedinUser(),
// 		aboutUser: {
// 			_id: aboutUser._id,
// 			fullname: aboutUser.fullname,
// 			imgUrl: aboutUser.imgUrl,
// 		},
// 	}

// 	reviewToAdd.byUser.score += 10
// 	await userService.update(reviewToAdd.byUser)

// 	const addedReview = await storageService.post('review', reviewToAdd)
// 	return addedReview
// }
