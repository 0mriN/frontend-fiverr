import { useSelector } from "react-redux"
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from "react-router-dom"
import downArrow from '../assets/img/svg/down-arrow.svg'
import { useState } from "react"
import { BudgetFilterForm } from "./BudgetFilterForm"
import { DeliveryTimeFilterForm } from "./DeliveryTimeFilterForm"
import { SortGigForm } from "./SortGigForm"


export function GigFilter({ gigs }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [isOpen, setIsOpen] = useState({ budget: false, deliveryTime: false, sort: false })
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

    function toggleModal(type) {
        switch (type) {
            case 'budget':
                setIsOpen({ budget: true, deliveryTime: false, sort: false })
                break
            case 'deliveryTime':
                setIsOpen({ budget: false, deliveryTime: true, sort: false })
                break
            case 'sort':
                setIsOpen({ budget: false, deliveryTime: false, sort: true })
                break

            default:
                break
        }
    }

    function closeModal() {
        setIsOpen({ ...isOpen, budget: false, deliveryTime: false })
    }

    function onApply(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        closeModal()
    }

    return <section className="gig-filter">

        <article className="title-container">
            <ul className="breadcrumbs flex align-center">
                <li className="flex align-center"><Link to="/"><img src={homeBreadcrumb} alt="Fiverr"></img></Link>&nbsp;</li>
                <li> / &nbsp;{filterBy && filterBy.tags && filterBy.tags[0]}</li>

                {/* <li> / &nbsp;{filterBy.tags[0]} </li> */}
            </ul>
            <h1>Website Development</h1>
            <p className="index-subtitle">Create, build, and develop your website with skilled website developers</p>
            {/* {userService.getLoggedinUser() && <button onClick={onAddGig}>Add a Gig</button>} */}
        </article>

        <article className="filter-container">
            <div className="btn-container">
                <div className="filter-btn budget flex align-center justify-center" onClick={() => toggleModal('budget')}>
                    <p>Budget</p>
                    <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg>
                    <BudgetFilterForm isOpen={isOpen.budget} onApply={onApply} />
                </div>
            </div>

            <div className="btn-container">
                <div className="filter-btn delivery-time flex align-center justify-center" onClick={() => toggleModal('deliveryTime')}>
                    <p>Delivery time</p>
                    <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg>
                    <DeliveryTimeFilterForm isOpen={isOpen.deliveryTime} onApply={onApply} />
                </div>
            </div>
        </article>

        <article className="sort-container">
            <ul className="sort-by-wrapper flex">
                <li>{gigs.length}+ Results</li>
                <li className="sort-by">
                    {/* <span>Sort By:</span> */}
                    <div className="form-container" onClick={() => toggleModal('sort')}>
                        <p>Sort By: <span>Best selling <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span></p>
                        <SortGigForm isOpen={isOpen.sort}/>
                    </div>
                </li>
            </ul>
        </article>

    </section>
}