
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import {saveToStorage} from '../util.service.js'

const STORAGE_KEY = 'gig'

const gigs = [{
    _id: 'g101',
    title: 'I will design your logo',
    aboutDesc:`<p>
  Our <mark>Logo Maker</mark> is the best tool for your branding needs. With our platform, you can:
  <ul>
    <li><strong>Create</strong> stunning logos effortlessly</li>
    <li><strong>Customize</strong> every aspect to fit your brand</li>
    <li><strong>Download</strong> high-resolution files instantly</li>
  </ul>
  Join thousands of satisfied users and elevate your brand today!
</p>
`,
aboutFiles:`    <div class="logo-details">
        <div class="detail-item">
            <span class="detail-title">Logo style</span>
            <span class="detail-content">Minimalist</span>
        </div>
        <div class="detail-item">
            <span class="detail-title">File format</span>
            <span class="detail-content">AI, JPG, PNG, SVG</span>
        </div>
    </div>`,
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
    aboutDesc:`<p>
  Discover the ultimate <mark>Logo Design Tool</mark> for your business. You can:
  <ul>
    <li><strong>Generate</strong> unique logos in minutes</li>
    <li><strong>Edit</strong> with an intuitive interface</li>
    <li><strong>Save</strong> multiple versions for different uses</li>
  </ul>
  Start now and see the difference a professional logo can make!
</p>`,
aboutFiles:`    <div class="logo-details">
        <div class="detail-item">
            <span class="detail-title">Logo style</span>
            <span class="detail-content">Minimalist</span>
        </div>
        <div class="detail-item">
            <span class="detail-title">File format</span>
            <span class="detail-content">AI, JPG, PNG, SVG</span>
        </div>
    </div>`,
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
    aboutDesc:`<p>
  Enhance your brand with our powerful <mark>Logo Creator</mark>. Features include:
  <ul>
    <li><strong>Design</strong> with a wide variety of templates</li>
    <li><strong>Personalize</strong> with colors, fonts, and icons</li>
    <li><strong>Export</strong> in multiple formats for web and print</li>
  </ul>
  Get started today and give your business the logo it deserves!
</p>`,
aboutFiles:`    <div class="logo-details">
        <div class="detail-item">
            <span class="detail-title">Logo style</span>
            <span class="detail-content">Minimalist</span>
        </div>
        <div class="detail-item">
            <span class="detail-title">File format</span>
            <span class="detail-content">AI, JPG, PNG, SVG</span>
        </div>
    </div>`,
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
saveToStorage(STORAGE_KEY,gigs)
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
    console.log(gigId)
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