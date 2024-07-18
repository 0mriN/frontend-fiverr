import { useState, useEffect } from 'react'

export function GigFilter({ filterBy, setFilterBy }) {
    const [ filterToEdit, setFilterToEdit ] = useState(structuredClone(filterBy))

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
                if(!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    return <section className="gig-filter">
            <input
                type="search"
                name="title"
                value={filterToEdit.title}
                placeholder="what service are you looking for today?"
                onChange={handleChange}
                required
            />
    </section>
}