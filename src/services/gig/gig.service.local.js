
import { storageService } from '../async-storage.service'
import { getRandomIntInclusive, makeId, makeLorem, saveToStorage, loadFromStorage } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'gig'
var gigs = loadFromStorage(STORAGE_KEY)
_createGigs()

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    // gigs = await storageService.query(STORAGE_KEY)
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
    console.log('bla',gigs);
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

function _createGigs() {
    
    if (!gigs || !gigs.length) {
        gigs = [
            _createGig(),
            _createGig('this is a gig'),
            _createGig('ill design your logo'),
            _createGig('i make gigs'),
            _createGig('i have a good gig'),
            _createGig('i can do a good gig'),
            _createGig('hire me to do a gig'),
            _createGig('i make gigs for youtube'),
        ]
        saveToStorage(STORAGE_KEY, gigs)
    }
}

function _createGig(title = 'a new gig') {
    return {
        id: makeId(),
        title,
        aboutDesc: `
            <p>
                Our <mark>Logo Maker</mark> is the best tool for your branding needs. With our platform, you can:
                <ul>
                    <li><strong>Create</strong> stunning logos effortlessly</li>
                    <li><strong>Customize</strong> every aspect to fit your brand</li>
                    <li><strong>Download</strong> high-resolution files instantly</li>
                </ul>
                Join thousands of satisfied users and elevate your brand today!
            </p>`,
        aboutFiles: `
            <div class="logo-details">
                <div class="detail-item">
                    <span class="detail-title">Logo style</span>
                    <span class="detail-content">Minimalist</span>
                </div>
                <div class="detail-item">
                    <span class="detail-title">File format</span>
                    <span class="detail-content">AI, JPG, PNG, SVG</span>
                </div>
            </div>`,
        price: getRandomIntInclusive(5, 50),
        owner: {
            _id: makeId(),
            fullname: makeLorem(2),
            imgUrl: '../src/assets/img/profile.png',
            level: _getOwnerLevel(),
            rate: getRandomIntInclusive(1, 5),
        },
        daysToMake: getRandomIntInclusive(1, 7),
        description: 'Make unique logo...',
        avgResponseTime: getRandomIntInclusive(1, 5),
        imgUrls: [
            '../src/assets/img/img1.png',
            '../src/assets/img/img2.png',
            '../src/assets/img/img3.png',
        ],
        tags: ['Arts And Crafts', 'Logo Design'],
        likedByUsers: ['mini-user'],
        reviews: [
            {
                id: 'madeId',
                txt: 'Did an amazing work',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            }, {
                id: 'madeId',
                txt: 'Did an awesome work',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u107',
                    fullname: 'user7',
                    imgUrl: '/img/img2.jpg',
                },
            }, {
                id: 'madeId',
                txt: 'Did a great job',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
    }
}

function _getOwnerLevel() {
    const levels = ['Level 1', 'Level 2', 'Top Rated']
    return levels[getRandomIntInclusive(0, 2)]
}