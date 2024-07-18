
import { storageService } from '../async-storage.service'
import { makeId, saveToStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    if (!gigs) saveToStorage(STORAGE_KEY, _getDemoGigs())
    var gigs = await storageService.query(STORAGE_KEY)
    const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
    }
    if (minSpeed) {
        gigs = gigs.filter(gig => gig.speed >= minSpeed)
    }
    if (sortField === 'vendor' || sortField === 'owner') {
        gigs.sort((gig1, gig2) =>
            gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
    }
    if (sortField === 'price' || sortField === 'speed') {
        gigs.sort((gig1, gig2) =>
            (gig1[sortField] - gig2[sortField]) * +sortDir)
    }

    gigs = gigs.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        const gigToSave = {
            _id: gig._id,
            price: gig.price,
            speed: gig.speed,
        }
        savedGig = await storageService.put(STORAGE_KEY, gigToSave)
    } else {
        const gigToSave = {
            vendor: gig.vendor,
            price: gig.price,
            speed: gig.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedGig = await storageService.post(STORAGE_KEY, gigToSave)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function _getDemoGigs() {
    return [{
        _id: 'g101',
        title: 'I will design your logo',
        price: 12.16,
        owner: {
            _id: 'u101',
            fullname: 'Dudu Da',
            imgUrl: 'url',
            level: 'basic/premium',
            rate: 4,
        },
        daysToMake: 3,
        description: 'Make unique logo...',
        avgResponseTime: 1,
        loc: 'Ghana',
        imgUrls: ['/img/img1.jpg'],
        tags: ['Arts And Crafts', 'Logo Design'],
        likedByUsers: ['mini-user'],
        reviews: [
            {
                id: 'madeId',
                txt: 'Did an amazing work',
                rate: 4,
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
    }, {
        _id: 'g102',
        title: 'I will design your logo',
        price: 12.16,
        owner: {
            _id: 'u102',
            fullname: 'Dudu Da',
            imgUrl: 'url',
            level: 'basic/premium',
            rate: 4,
        },
        daysToMake: 3,
        description: 'Make unique logo...',
        avgResponseTime: 1,
        loc: 'Ghana',
        imgUrls: ['/img/img1.jpg'],
        tags: ['Arts And Crafts', 'Logo Design'],
        likedByUsers: ['mini-user'],
        reviews: [
            {
                id: 'madeId',
                txt: 'Did an amazing work',
                rate: 4,
                by: {
                    _id: 'u103',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
    }, {
        _id: 'g103',
        title: 'I will design your logo',
        price: 12.16,
        owner: {
            _id: 'u103',
            fullname: 'Dudu Da',
            imgUrl: 'url',
            level: 'basic/premium',
            rate: 4,
        },
        daysToMake: 3,
        description: 'Make unique logo...',
        avgResponseTime: 1,
        loc: 'Ghana',
        imgUrls: ['/img/img1.jpg'],
        tags: ['Arts And Crafts', 'Logo Design'],
        likedByUsers: ['mini-user'],
        reviews: [
            {
                id: 'madeId',
                txt: 'Did an amazing work',
                rate: 4,
                by: {
                    _id: 'u104',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
    },

    ]
}