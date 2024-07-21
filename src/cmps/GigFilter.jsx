import { useState, useEffect } from 'react'

export function GigFilter({ filterBy, setFilterBy }) {
    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

    useEffect(() => {
        setFilterBy(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    return <>
        <section className="gig-filter">
            <input
                type="search"
                name="title"
                value={filterToEdit.title}
                placeholder="what service are you looking for today?"
                onChange={handleChange}
                required
            />
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="search"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="white" strokeWidth="2" transform="translate(-1687 -1941)"><g transform="translate(1688 1942)"><circle cx="7.5" cy="7.5" r="7.5"></circle><path d="M18 18l-5.2-5.2"></path></g></g></g></svg>
            </button>
        </section>
    </>
}