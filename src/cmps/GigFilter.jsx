import { useSelector } from "react-redux"
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg'
import { Link } from "react-router-dom"
import downArrow from '../assets/img/svg/down-arrow.svg'
import { useEffect, useState } from "react"
import { BudgetFilterForm } from "./BudgetFilterForm"
import { DeliveryTimeFilterForm } from "./DeliveryTimeFilterForm"
import { SortGigForm } from "./SortGigForm"
import { setFilter } from "../store/actions/gig.actions"


export function GigFilter({ gigs }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    const [isOpen, setIsOpen] = useState({ budgetModal: false, deliveryTimeModal: false, sortModal: false })
    const [sort, setSort] = useState(filterBy.sort)

    useEffect(() => {
        console.log('use effected');
        switch (filterBy.sort) {
            case 'bestSelling':
                setSort('Best selling')
                break;
            case 'recommended':
                setSort('Recommended')
                break;
            case 'newestArrivals':
                setSort('Newest arrivals')
                break;

            default:
                break;
        }
    }, [filterBy, isOpen])

    function toggleModal(type, ev) {

        switch (type) {
            case 'budget':
                setIsOpen({ budgetModal: true, deliveryTimeModal: false, sortModal: false })
                break;
            case 'deliveryTime':
                setIsOpen({ budgetModal: false, deliveryTimeModal: true, sortModal: false })
                break;
            case 'sort':
                ev.preventDefault()
                ev.stopPropagation()
                setIsOpen({ budgetModal: false, deliveryTimeModal: false, sortModal: true })
                break;

            default:
                break
        }
    }

    function closeModal() {
        console.log('before', isOpen);
        setIsOpen({ ...isOpen, budgetModal: false, deliveryTimeModal: false })
        console.log('after', isOpen);
        // setIsOpen({ budget: false, deliveryTime: false, sort: false })
        // console.log(isOpen);
    }

    function applyFilter(ev, value) {
        ev.preventDefault()
        ev.stopPropagation()
        console.log('applied', ev, value);
        setFilter({ ...filterBy, budget: value })
        closeModal()
    }

    function capitalizeFirstLetter(string) {
        if (!string) return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return <section className="gig-filter">

        <article className="title-container">
            <ul className="breadcrumbs flex align-center">
                <li className="flex align-center"><Link to="/"><img src={homeBreadcrumb} alt="Fiverr"></img></Link>&nbsp;</li>
                <li> <span>/</span> <a>&nbsp;{capitalizeFirstLetter(filterBy.tags[0])}</a></li>
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
                    <BudgetFilterForm isOpen={isOpen.budgetModal} applyFilter={applyFilter} />
                </div>
            </div>

            <div className="btn-container">
                <div className="filter-btn delivery-time flex align-center justify-center" onClick={() => toggleModal('deliveryTime')}>
                    <p>Delivery time</p>
                    <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg>
                    <DeliveryTimeFilterForm isOpen={isOpen.deliveryTimeModal} applyFilter={applyFilter} />
                </div>
            </div>
        </article>

        <article className="sort-container">
            <ul className="sort-by-wrapper flex">
                <li>{gigs.length}+ Results</li>
                <li className="sort-by">
                    <div className="form-container" onClick={() => toggleModal('sort', event)}>
                        <p>Sort By: <span>{sort} <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" /></svg></span></p>
                        <SortGigForm isOpen={isOpen.sortModal} />
                    </div>
                </li>
            </ul>
        </article>

    </section>
}