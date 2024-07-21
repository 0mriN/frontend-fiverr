import { useEffect, useState } from "react"
import { gigService } from "../services/gig"
import { useNavigate, useParams } from "react-router"
import { addGig, updateGig } from "../store/actions/gig.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { loadImageFromInput } from "../services/upload.service.local.js"


export function GigEdit() {
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.gigId) loadGig()
    }, [gigToEdit])

    async function loadGig() {
        try {
            const gig = await gigService.getById(params.gigId) // check
            setGigToEdit(gig)
        } catch (err) {
            console.log('err:', err)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = value === '' ? '' : +value
                break

            case 'checkbox':
                value = target.checked
                break
            case 'file':
                loadImageFromInput(target.files[0], (imgUrl) => {
                    setGigToEdit(prevGigToEdit => ({ ...prevGigToEdit, imgUrls: [imgUrl] }))
                })
                return

            default:
                break
        }

        setGigToEdit(prevGigToEdit => ({ ...prevGigToEdit, [field]: value }))
    }

    async function onAddGig(ev) {
        ev.preventDefault()
        try {
            const savedGig = await addGig(gigToEdit)
            navigate('/gig')
            showSuccessMsg(`Gig saved !`)
        } catch (err) {
            showErrorMsg(`Cannot save gig`)
            console.log('err:', err)
        }
    }
    //try to do them both in the same function
    async function onUpdateGig(ev) {
        ev.preventDefault()
        try {
            const savedGig = await updateGig(gigToEdit)
            navigate('/gig')
            showSuccessMsg(`Gig saved !`)
        } catch (err) {
            showErrorMsg(`Cannot save gig`)
            console.log('err:', err)
        }
    }

    const { title, price, description } = gigToEdit

    return (
        <section className="gig-edit">
            <h1>Add Gig</h1>
            <form onSubmit={onAddGig} >
                <label htmlFor="title">Title:</label>
                <input autoFocus onChange={handleChange} type="text" name="title" id="title" value={title} />

                <label htmlFor="price">Price:</label>
                <input onChange={handleChange} type="number" name="price" id="price" value={price} />

                <label htmlFor="description">Description:</label>
                <textarea onChange={handleChange} type="text" name="description" id="description" value={description} ></textarea>
                <div className="upload-container">
                    <label htmlFor="imgUrls">Add your gig photo:</label>
                    <input type="file" className="file-input-btn" name="imgUrls" onChange={handleChange} accept="image/*" />
                </div>
                <button>Save</button>
            </form>
        </section>
    )
}
