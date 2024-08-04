import { useNavigate } from "react-router"
import { getPrimeCategories } from "../services/util.service"
import { showSearchBar } from "../store/actions/system.actions"
import { useRef, useState, useEffect } from "react"

export function PrimeCategoryFilter({ setFilterBy, filterBy }) {
    const navigate = useNavigate()
    const categories = getPrimeCategories('header')
    const categoryListRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

 
    function updateArrowsVisibility() {
        if (categoryListRef.current) {
            const scrollLeft = categoryListRef.current.scrollLeft
            const scrollWidth = categoryListRef.current.scrollWidth
            const clientWidth = categoryListRef.current.clientWidth
            
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
        }
    }

    useEffect(() => {
        updateArrowsVisibility()

        const container = categoryListRef.current
        container.addEventListener('scroll', updateArrowsVisibility)

        return () => {
            container.removeEventListener('scroll', updateArrowsVisibility)
        }
    }, [])

    function onClickCategory(category) {
        setFilterBy({ ...filterBy, tags: [category] })
        showSearchBar(true)
        navigate('/gig')
    }

    function scrollLeft() {
        if (categoryListRef.current) {
            categoryListRef.current.scrollBy({ left: -200, behavior: 'smooth' })
        }
    }

    function scrollRight() {
        if (categoryListRef.current) {
            categoryListRef.current.scrollBy({ left: 200, behavior: 'smooth' })
        }
    }

    return (
        <div className="full-width-border">
            <section className="prime-category-filter full main-container">
                {showLeftArrow && (
                    <button className="arrow left" onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
                        </svg>
                    </button>
                )}
                <div className="category-list-container">
                    <ul className="category-list flex" ref={categoryListRef}>
                        {categories.map(category =>  
                            <li key={category.tag} onClick={() => onClickCategory(category.tag)}>{category.title}</li>
                        )}
                    </ul>
                </div>
                {showRightArrow && (
                    <button className="arrow right" onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                            <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                        </svg>
                    </button>
                )}
            </section>
        </div>
    )
}
