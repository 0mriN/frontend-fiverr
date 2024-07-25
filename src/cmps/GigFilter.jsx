import { useSelector } from "react-redux"
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from "react-router-dom"
import downArrow from '../assets/img/svg/down-arrow.svg'

export function GigFilter({ gigs }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    function handleChange({ target }) {
        let { value, name: field, type, checked } = target

        switch (type) {
            case 'number':
            case 'range':
                value = +value
                break
            case 'checkbox':
                value = checked

            default: break
        }
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
    }

    return <section className="gig-filter">

        <article className="title-container">
            <ul className="breadcrumbs flex align-center">
                <li className="flex align-center"><Link to="/"><img src={homeBreadcrumb} alt="Fiverr"></img></Link>&nbsp</li>
                <li> / &nbsp{filterBy.tags[0]} </li>
            </ul>
            <h1>Website Development</h1>
            <p className="index-subtitle">Create, build, and develop your website with skilled website developers</p>
            {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
        </article>

        <article className="filter-container">
            <div className="btn-container">
                <button className="filter-btn budget flex align-center justify-center">
                    Budget
                    <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg>
                </button>
            </div>

            <div className="btn-container">
                <button className="filter-btn delivery-time flex align-center justify-center">
                    Delivery time
                    <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg>
                </button>
            </div>
        </article>

        <article className="sort-container">
            <ul className="sort-by-wrapper flex">
                <li>{gigs.length}+ Results</li>
                <li className="sort-by">
                    <span>Sort By:</span>
                    <select className="sort-select">Best selling
                        <option value="">Best selling</option>
                        <option value="">Recommended</option>
                        <option value="">Newest arrivals</option>
                    </select>
                </li>
            </ul>
        </article>

    </section>
}