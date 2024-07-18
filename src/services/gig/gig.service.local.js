
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'gig'

const gigs = [{
    _id: 'g101',
    title: 'I will design your logo in just 24 hrs in modern style',
    price: 10.00,
    owner: {
        _id: 'u101',
        fullname: 'Shushu Sha',
        imgUrl: './src/assets/img/profile.png',
        level: 'Top Rated',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img1.png'],
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
        },{
            id: 'madeId',
            txt: 'Did an awesome work',
            rate: 5,
            by: {
                _id: 'u107',
                fullname: 'user7',
                imgUrl: '/img/img2.jpg',
            },
        },{
            id: 'madeId',
            txt: 'Did a great job',
            rate: 2,
            by: {
                _id: 'u102',
                fullname: 'user2',
                imgUrl: '/img/img2.jpg',
            },
        },
    ],
}, {
    _id: 'g102',
    title: 'I will design a timeless unique 3d buisness logo design',
    price: 12.16,
    owner: {
        _id: 'u102',
        fullname: 'Dudu Da',
        imgUrl: './src/assets/img/profile.png',
        level: 'Level 1',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img2.png'],
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
    _id: 'g105',
    title: 'I will create a hand drawn logo',
    price: 35.90,
    owner: {
        _id: 'u103',
        fullname: 'Bubu Ba',
        imgUrl: './src/assets/img/profile.png',
        level: 'Level 2',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img3.png'],
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
},{
    _id: 'g106',
    title: 'I will design your logo in just 24 hrs in modern style',
    price: 10.00,
    owner: {
        _id: 'u101',
        fullname: 'Shushu Sha',
        imgUrl: './src/assets/img/profile.png',
        level: 'Top Rated',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img1.png'],
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
        },{
            id: 'madeId',
            txt: 'Did an awesome work',
            rate: 5,
            by: {
                _id: 'u107',
                fullname: 'user7',
                imgUrl: '/img/img2.jpg',
            },
        },{
            id: 'madeId',
            txt: 'Did a great job',
            rate: 2,
            by: {
                _id: 'u102',
                fullname: 'user2',
                imgUrl: '/img/img2.jpg',
            },
        },
    ],
}, {
    _id: 'g107',
    title: 'I will design a timeless unique 3d buisness logo design',
    price: 12.16,
    owner: {
        _id: 'u102',
        fullname: 'Dudu Da',
        imgUrl: './src/assets/img/profile.png',
        level: 'Level 1',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img2.png'],
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
    _id: 'g108',
    title: 'I will create a hand drawn logo',
    price: 35.90,
    owner: {
        _id: 'u103',
        fullname: 'Bubu Ba',
        imgUrl: './src/assets/img/profile.png',
        level: 'Level 2',
        rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    avgResponseTime: 1,
    loc: 'Ghana',
    imgUrls: ['./src/assets/img/img3.png'],
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
export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    // var gigs = await storageService.query(STORAGE_KEY)
    // const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    // if (txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
    // }
    // if (minSpeed) {
    //     gigs = gigs.filter(gig => gig.speed >= minSpeed)
    // }
    // if (sortField === 'vendor' || sortField === 'owner') {
    //     gigs.sort((gig1, gig2) =>
    //         gig1[sortField].localeCompare(gig2[sortField]) * +sortDir)
    // }
    // if (sortField === 'price' || sortField === 'speed') {
    //     gigs.sort((gig1, gig2) =>
    //         (gig1[sortField] - gig2[sortField]) * +sortDir)
    // }

    // gigs = gigs.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
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