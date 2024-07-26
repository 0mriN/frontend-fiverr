import { storageService } from "../async-storage.service"

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser"

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
  saveLoggedinUser,
}

async function getUsers() {
  const users = await storageService.query("user")
  return users.map((user) => {
    delete user.password
    return user
  })
}

async function getById(userId) {
  return await storageService.get("user", userId)
}

function remove(userId) {
  return storageService.remove("user", userId)
}

async function update({ _id, score }) {
  const user = await storageService.get("user", _id)
  user.score = score
  await storageService.put("user", user)

  // When admin updates other user's details, do not update loggedinUser
  const loggedinUser = getLoggedinUser()
  if (loggedinUser._id === user._id) saveLoggedinUser(user)

  return user
}

async function login(userCred) {
  const users = [
    {
      _id: "u101",
      fullname: "Idan Dujovne",
      imgUrl: "../../assets/img/profile.png",
      username: "idan",
      password: "1234",
      level: "basic",
      isSeller: true,
      isAdmin:false,
      country:'Afghanistan',
      memberSince:'july',
      description:`Unlock stunning visuals with our top-notch carousel design service! We create interactive and engaging carousels with seamless transitions and responsive thumbnails. Perfect for showcasing your products or portfolio. Enhance user experience and capture attention effortlessly. Let's bring your vision to life with precision and creativity!`,
    },
    {
      _id: "u102",
      fullname: "Elad Berliner",
      imgUrl: "../../assets/img/profile.png",
      username: "elad",
      password: "1234",
      level: "basic",
      isSeller: true,
      isAdmin:false,
      country:'Israel',
      memberSince:'july',
      description:`Unlock stunning visuals with our top-notch carousel design service! We create interactive and engaging carousels with seamless transitions and responsive thumbnails. Perfect for showcasing your products or portfolio. Enhance user experience and capture attention effortlessly. Let's bring your vision to life with precision and creativity!`,

    },
    {
      _id: "u102",
      fullname: "Omri Nadav",
      imgUrl: "../../assets/img/profile.png",
      username: "elad",
      password: "1234",
      level: "basic",
      isSeller: false,
      isAdmin:true,
      country:'disneyland',
      memberSince:'july',
      description:`Unlock stunning visuals with our top-notch carousel design service! We create interactive and engaging carousels with seamless transitions and responsive thumbnails. Perfect for showcasing your products or portfolio. Enhance user experience and capture attention effortlessly. Let's bring your vision to life with precision and creativity!`,
    },
    
  ]
  const user = users.find((user) => user.username === userCred.username)
  console.log('usercred ', userCred)
console.log('user: ', user)
  if (user) return saveLoggedinUser(user)
  if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
  if (!userCred.imgUrl)
    userCred.imgUrl =
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
  userCred.score = 10000

  const user = await storageService.post("user", userCred)
  return saveLoggedinUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
  user = {
    _id: user._id,
    fullname: user.fullname,
    imgUrl: user.imgUrl,
    score: user.score,
    isAdmin: user.isAdmin,
    isSeller:user.isSeller,
    level: user.level,
country:user.country,
memberSince:user.memberSince,
description:user.description
    
  }
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

// To quickly create an admin user, uncomment the next line
// _createAdmin()
async function _createAdmin() {
  const user = {
    username: "admin",
    password: "admin",
    fullname: "Mustafa Adminsky",
    imgUrl:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    score: 10000,
  }

  const newUser = await storageService.post("user", userCred)
  console.log("newUser: ", newUser)
}
