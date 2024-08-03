export const uploadService = {
	uploadImg,
}

async function uploadImg(ev) {
	const CLOUD_NAME = 'df2mjiv8j'
	const UPLOAD_PRESET = 'gigs_preset'
	const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

	const formData = new FormData()

	// Building the request body
	formData.append('file', ev)
	formData.append('upload_preset', UPLOAD_PRESET)

	// Sending a post method request to Cloudinary API
	try {
		const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
		const imgData = await res.json()
		return imgData.secure_url
	} catch (err) {
		console.error(err)
		throw err
	}
}