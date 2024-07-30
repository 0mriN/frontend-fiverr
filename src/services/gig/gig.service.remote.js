import { httpService } from '../http.service'
import { userService } from '../user';
export const gigService = {
    query,
    getById,
    save,
    remove,
    addGigMsg,
    getStarLevel,
    getAvgRating,
}

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(`gig`, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}



async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    let savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)
    } else {
       /*  savedGig = await httpService.post('gig', gig) */


       const gigToSave = {
        title: gig.title,
        price: gig.price,
        description: gig.description,
        tags: gig.tags,
        daysToMake: gig.daysToMake,
        owner: userService.getLoggedinUser(),
        reviews: [
            {
                id: makeId(),
                txt: 'Did an amazing work',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
            {
                id: makeId(),
                txt: 'Did an awesome work',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u107',
                    fullname: 'user7',
                    imgUrl: '/img/img2.jpg',
                },
            },
            {
                id: makeId(),
                txt: 'Did a great job',
                rate: getRandomIntInclusive(1, 5),
                by: {
                    _id: 'u102',
                    fullname: 'user2',
                    imgUrl: '/img/img2.jpg',
                },
            },
        ],
        imgUrls: gig.imgUrls || [
            '../src/assets/img/img1.png',
            '../src/assets/img/img2.png',
            '../src/assets/img/img3.png',
        ],
    };

    savedGig = await httpService.post('gig', gigToSave)


    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, {txt})
    return savedMsg
}



function getStarLevel(gig) {
    let color1 = '#E4E5E7';
    let color2 = '#E4E5E7';
    let color3 = '#E4E5E7';
    let isTopRated = '';

    if (gig.owner.level === 'Level 1') {
        color1 = '#404145';
        isTopRated = '';
    } else if (gig.owner.level === 'Level 2') {
        color1 = '#404145';
        color2 = '#404145';
        isTopRated = '';
    } else if (gig.owner.level === 'Top Rated') {
        color1 = '#804317';
        color2 = '#804317';
        color3 = '#804317';
        isTopRated = 'top-rated';
    }
    return { color1, color2, color3, isTopRated };
}

function getAvgRating(reviews) {
    if (reviews.length === 0) return 'No reviews';

    const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
    return (totalRating / reviews.length).toFixed(2);
}
