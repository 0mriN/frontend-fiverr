
import { storageService } from '../async-storage.service'
import { getRandomIntInclusive, makeId, makeLorem, saveToStorage, loadFromStorage } from '../util.service'
import { userService } from '../user'

const GIG_KEY = 'gig'
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
    const gigs = await storageService.query(GIG_KEY)
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
    return storageService.get(GIG_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(GIG_KEY, gigId)
}

async function save(gig) {
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
    let gigs = loadFromStorage(GIG_KEY)
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
        getToKnowDesc: "Senior graphic designer experienced in logo and covers design",
        description: `<p>Fiverr says the writing of this description is my chance to be creative, I disagree. My real chance to be creative is when I start designing a logo.</p>

<p>I will give all my knowledge and experience to creating the perfect logo for your business, but all that is for nothing without creativity, that's the reason why most of all I'm going to be creative with your new logo. Push the boundaries, explore new possibilities, create something unique, something that will make your brand stand out from the competition! <mark>Well seems like I did put some creativity in this description after all :)</mark></p>

<p><strong>What will you get in Gig deliverables:</strong></p>
<ul>
  <li>2-4 unique designs concepts</li>
  <li>Professional and unique modern concepts</li>
  <li>300 DPI HIGH-QUALITY JPG, and PNG format.</li>
  <li>AI (Source file) & High-Quality PDF</li>
</ul>

<p><strong>Why trust me?</strong></p>
<ul>
  <li>Fast Response Time</li>
  <li>100% Customer Satisfaction</li>
  <li>Full Copyright</li>
  <li>I guarantee on-time delivery</li>
  <li>Fully editable files.</li>
</ul>

<p><strong>Still not convinced?</strong></p>
<p>Hit me a message with any questions or concerns and I will answer in the shortest time.</p>

<p><em>Have a nice day,<br>Stefan Prodanovic</em></p>
`,
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