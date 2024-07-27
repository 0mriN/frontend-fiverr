import { useEffect, useState } from "react"
import { gigService } from "../services/gig"
import { useNavigate, useParams } from "react-router"
import { addGig, updateGig } from "../store/actions/gig.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { loadImageFromInput } from "../services/upload.service.local.js"
import { Checkbox, FormControlLabel, FormGroup, Select, MenuItem, ListItemText, InputLabel, FormControl } from "@mui/material"


export function GigEdit() {
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.gigId) loadGig()
    }, [])

    async function loadGig() {
        try {
            const gig = await gigService.getById(params.gigId)
            setGigToEdit(gig)
        } catch (err) {
            console.log('err:', err)
        }
    }

    const availableTags = [
        "Graphics & Design",
        "Programming & Tech",
        "Digital Marketing",
        "Video & Animation",
        "Writing & Translation",
        "Music & Audio",
        "Business",
        "Consulting",
        "AI Services",
        "Personal Growth"
    ]

    function handleTagChange(tag) {
        setGigToEdit(prevGigToEdit => {
            const currentTags = prevGigToEdit.tags || []
            const isSelected = currentTags.includes(tag)
            const updatedTags = isSelected
                ? currentTags.filter(t => t !== tag)
                : [...currentTags, tag]
            return { ...prevGigToEdit, tags: updatedTags }
        })
    }

    const CustomCheckbox = (props) => (
        <Checkbox
          {...props}
          sx={{
            '& .MuiSvgIcon-root': {
              color: '#1dbf73',
            },
            '&.Mui-checked': {
              color: '#1dbf73',
            },
          }}
        />
      )

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
            navigate('/profile')
            showSuccessMsg(`Gig saved !`)
        } catch (err) {
            showErrorMsg(`Cannot save gig`)
            console.log('err:', err)
        }
    }

    function handleButtonClick() {
        document.getElementById('imgUrls').click()
    }

    function onCancel(){
      let isConfirmed = confirm('Are you sure you want to cancel ?')
        if(!isConfirmed) return
        navigate('/profile')
    }

    const { title, price, description, tags, daysToMake } = gigToEdit

    return (
        <section className="gig-edit">
            <form >
                <div className="top-form">
                    <label htmlFor="title" className="title">
                        <span>Gig Title
                            <p>As your Gig storefront, your title is the most important place to include keywords that buyers would likely use to search for a service like yours.</p>
                        </span>
                        <input autoFocus onChange={handleChange} type="text" name="title" id="title" value={title} placeholder="I will..." />
                    </label>

                    <label htmlFor="description" className="description">
                        <span>
                            Description
                            <p>Briefly Describe Your Gig</p>
                        </span>
                        <textarea onChange={handleChange} type="text" name="description" id="description" value={description} placeholder="Your description here..."></textarea>
                    </label>
                </div>

                <div className="bottom-form">

                    <label htmlFor="days" className="days">
                        <span>Days to make
                            <p>Days it will take you on average to finish this gig.</p>
                        </span>
                        <input onChange={handleChange} type="text" name="days" id="days" value={daysToMake} />
                    </label>

                    <label htmlFor="price" className="price">
                        <span>Price
                            <p>Price you're offering for this gig</p>
                        </span>
                        <input onChange={handleChange} type="text" name="price" id="price" value={price} />
                    </label>

                    <div className="upload-section">
                    <label htmlFor="imgUrls" className="upload-container">
                        <span>Upload Images
                            <p>Encourage buyers to choose your Gig by featuring a variety of your work.  </p>
                        </span>
                    </label>
                    <button type="button" className="upload-button" onClick={handleButtonClick}>
                        Choose File
                    </button>
                    <input
                        type="file"
                        id="imgUrls"
                        className="file-input-btn"
                        name="imgUrls"
                        onChange={handleChange}
                        accept="image/*" />
                    </div>

                </div>


                {/* <FormControl sx={{ width: "100%", mb: 2 }}>
                    <InputLabel id="tags-label">Tags</InputLabel>
                    <Select
                        labelId="tags-label"
                        multiple
                        value={tags || []}
                        onChange={handleTagChange}
                        renderValue={(selected) => selected.join(", ")}
                    >
                        {availableTags.map((tag) => (
                            <MenuItem key={tag} value={tag}>
                                <Checkbox checked={tags?.includes(tag)} />
                                <ListItemText primary={tag} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}

                <h3 className="categories-title">Categories</h3>
                <div className="gig-tags">
                    {availableTags.map(tag => (
                        <FormControlLabel
                            key={tag}
                            control={
                                <CustomCheckbox
                                    checked={gigToEdit.tags?.includes(tag) || false}
                                    onChange={() => handleTagChange(tag)}
                                    name={tag}
                                />
                            }
                            label={tag}
                        />
                    ))}
                </div>

            </form>
            <div className="btns-wrapper">
            <button onClick={onCancel} className="cancel-btn">Cancel</button>
            <button onClick={onAddGig} className="save-btn">Save</button>
            </div>
        </section>
    )
}
