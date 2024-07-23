import { useSelector } from "react-redux"
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from "react-router-dom"

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
    
        <article className='title-wrapper'>
            <ul className='breadcrumbs'>
                <li><Link to="/"> <img src={homeBreadcrumb} alt="Fiverr"></img></Link></li>
                <li> / {filterBy.tags[0]} </li>
            </ul>
            <h1>Website Development</h1>
            <div><p className="index-subtitle">Create, build, and develop your website with skilled website developers</p></div>
            {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
        </article>
        <article className='sort-container'>
            <div className='top-filters'>
                <select onChange={handleChange}>budget
                    <option value="value">Value</option>
                    <option value="midRange">Mid-range</option>
                    <option value="highEnd">High-end</option>
                </select>
                <button>Delivery time</button>
            </div>
            <ul className='sort-by-wrapper'>
                <li>{gigs.length}+ Results</li>
                <li className='sort-by'>
                    <span>Sort By:</span>
                    <select className='sort-selector'>Best selling
                        <option value="">Best selling</option>
                        <option value="">Recommended</option>
                        <option value="">Newest arrivals</option>
                    </select>
                </li>
            </ul>
        </article>
    </section>
}