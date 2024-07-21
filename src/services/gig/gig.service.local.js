
import { storageService } from '../async-storage.service'
import { getRandomIntInclusive, makeId, makeLorem, saveToStorage, loadFromStorage } from '../util.service'
import { userService } from '../user'

const GIG_KEY = 'gig'
var gigs = loadFromStorage(GIG_KEY)
_createGigs()

export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getStarLevel,
    getAvgRating,
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    // gigs = await storageService.query(GIG_KEY)
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
    console.log('hi');
    return storageService.get(GIG_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(GIG_KEY, gigId)
}

async function save(gig) {
    console.log('hi from save local before');
    var savedGig
    if (gig._id) {
        const gigToSave = {
            _id: gig._id,
            title: gig.title,
            price: gig.price,
            description: gig.description,
        }
        savedGig = await storageService.put(GIG_KEY, gigToSave)
    } else {
        const gigToSave = {
            title: gig.title,
            price: gig.price,
            description: gig.description,
            owner: {
                _id: makeId(),
                fullname: makeLorem(2),
                imgUrl: '../src/assets/img/profile.png',
                level: 'Level 1',
                rate: getRandomIntInclusive(1, 5),
            },
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
                    }
                }
            ],
            imgUrls: gig.imgUrls || [
                '../src/assets/img/img1.png',
                '../src/assets/img/img2.png',
                '../src/assets/img/img3.png',
            ],

            // Later, owner is set by the backend
            // owner: userService.getLoggedinUser(),
            // imgUrls: gig.imgUrls
        }
        console.log('hi from save local after', gigToSave.level);

        savedGig = await storageService.post(GIG_KEY, gigToSave)
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
    await storageService.put(GIG_KEY, gig)

    return msg
}

function getStarLevel(gig) {

    let color1 = '#E4E5E7'
    let color2 = '#E4E5E7'
    let color3 = '#E4E5E7'
    let isTopRated = ''

    if (gig.owner.level === 'Level 1') {
        color1 = '#404145'
        isTopRated = ''
    }
    else if (gig.owner.level === 'Level 2') {
        color1 = '#404145'
        color2 = '#404145'
        isTopRated = ''
    }
    else if (gig.owner.level === 'Top Rated') {
        color1 = '#804317'
        color2 = '#804317'
        color3 = '#804317'
        isTopRated = 'top-rated'
    }
    return { color1, color2, color3, isTopRated }
}

function getAvgRating(reviews) {
    if (reviews.length === 0) return 'No reviews';

    const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
    return (totalRating / reviews.length).toFixed(2);
}

function _createGigs() {
    // var gigs = loadFromStorage(GIG_KEY)
    if (!gigs || !gigs.length) {
        gigs = [
            _createGig(),
            _createGig('this is a gig and ill design your logo ill design your logo ill design your logo'),
            _createGig('ill design your logo i make gigs i make gigs i make gigs i make gigs hire me to do a gig'),
            _createGig('i make gigs'),
            _createGig('i make gigs'),
            _createGig('i make gigs'),
            _createGig('hire me to do a gig'),
            _createGig('i make gigs for youtube'),
        ]
        saveToStorage(GIG_KEY, gigs)
    }
}

function _createGig(title = 'a new gig') {
    return {
        _id: makeId(),
        title,
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
        description: `
            <p>
                Our <mark>Logo Maker</mark> is the best tool for your branding needs. With our platform, you can:
                <ul>
                    <li><strong>Create</strong> stunning logos effortlessly</li>
                    <li><strong>Customize</strong> every aspect to fit your brand</li>
                    <li><strong>Download</strong> high-resolution files instantly</li>
                </ul>
                Join thousands of satisfied users and elevate your brand today!
            </p>`,
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