import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../store/actions/gig.actions'
import { useNavigate } from 'react-router'
import { useVisibility } from '../customHooks/useVisibility'
import { SHOW_SEARCH_BAR } from '../store/reducers/system.reducer'

export function SearchBar({ trackInViewport = false }) {
    const showTopSearchBar = useSelector(storeState => storeState.systemModule.showSearchBar)
    const filterBy = useSelector((storeState) => storeState.gigModule.filterBy)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const ref = useRef()

    const isVisible = trackInViewport ? useVisibility(ref, { threshold: 0 }) : true

    useEffect(() => {
        if (trackInViewport) {
            const action = {
                type: SHOW_SEARCH_BAR,
                showSearchBar: !isVisible,
            }
            dispatch(action)
        }
    }, [isVisible])

    function handleChange(ev) {
        const { name, value } = ev.target
        onSetFilter({ ...filterBy, [name]: value })
    }

    function onSetFilter(filterBy) {
        setFilter(filterBy)
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        if (!filterBy.title) return
        onSetFilter(filterBy)
        navigate('/gig')
    }

    return <section className={`search-bar ${!(trackInViewport || showTopSearchBar) ? 'transparent' : ''}`}>
        <div ref={ref} className='out-of-vp-indicator'></div>
        <form className="search-bar" onSubmit={onSubmitFilter}>
            <input
                type="search"
                name="title"
                value={filterBy.title}
                placeholder="what service are you looking for today?"
                onChange={handleChange}
                required
            />
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="search"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="white" strokeWidth="2" transform="translate(-1687 -1941)"><g transform="translate(1688 1942)"><circle cx="7.5" cy="7.5" r="7.5"></circle><path d="M18 18l-5.2-5.2"></path></g></g></g></svg>
            </button>
        </form>
    </ section>
}