export function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

export function getPrimeCategories(type) {
    if (type === 'header') {
        return [
            {
                title: 'Graphics & Design',
                tag: 'graphics design',
            },
            {
                title: 'Programming & Tech',
                tag: 'programming tech',
            },
            {
                title: 'Digital Marketing',
                tag: 'digital marketing',
            },
            {
                title: 'Video & Animation',
                tag: 'video animation',
            },
            {
                title: 'Writing & Translation',
                tag: 'writing translation',
            },
            {
                title: 'Music & Audio',
                tag: 'music audio',
            },
            {
                title: 'Business',
                tag: 'business',
            },
            {
                title: 'Consulting',
                tag: 'consulting',
            },
            {
                title: 'AI Services',
                tag: 'ai services',
            },
            {
                title: 'Personal Growth',
                tag: 'personal growth',
            },
        ]
        } else if(type === 'home') {
        return [
            {
                title: 'Programming & Tech',
                tag: 'programming tech',
            },
            {
                title: 'Graphics & Design',
                tag: 'graphics design',
            },
            {
                title: 'Digital Marketing',
                tag: 'digital marketing',
            },
            {
                title: 'Writing & Translation',
                tag: 'writing translation',
            },
            {
                title: 'Video & Animation',
                tag: 'video animation',
            },
            {
                title: 'AI Services',
                tag: 'ai services',
            },
            {
                title: 'Music & Audio',
                tag: 'music audio',
            },
            {
                title: 'Business',
                tag: 'business',
            },
            {
                title: 'Consulting',
                tag: 'consulting',
            },
        ]
    }
}

export function getRandomTags() {
    const tags = [
        'graphics design',
        'programming tech',
        'digital marketing',
        'video animation',
        'writing translation',
        'music audio',
        'business',
        'consulting',
        'ai services',
        'personal growth',
    ]
     return ([
        tags[getRandomIntInclusive(0, tags.length - 1)],
        tags[getRandomIntInclusive(0, tags.length - 1)],
    ])
}

export function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


export function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

export function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}