import { useSelector } from "react-redux";
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg';
import { Link } from "react-router-dom";
import { useState } from "react";
import { setSortedGigs } from "../pages/OrderIndex";

const levels = ['Level 1', 'Level 2', 'Top Rated'];

export function GigFilter({ gigs, setSortedGigs }) {
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy);
    const [sortOption, setSortOption] = useState('Recommended');

    function handleChange({ target }) {
        let { value, name: field, type, checked } = target;

        switch (type) {
            case 'number':
            case 'range':
                value = +value;
                break;
            case 'checkbox':
                value = checked;
            default:
                break;
        }
        setFields((prevFields) => ({ ...prevFields, [field]: value }));
    }

    function handleSortChange(event) {
        const { value } = event.target;
        setSortOption(value);
        let sortedGigs = [...gigs];

        if (value === 'Recommended') {
            sortedGigs.sort((a, b) => {
                const aLevelIndex = levels.indexOf(a.owner.level);
                const bLevelIndex = levels.indexOf(b.owner.level);
                return bLevelIndex - aLevelIndex;
            });
        } else if (value === 'Best selling') {
            // Implement your sorting logic for Best selling if needed
        } else if (value === 'Newest arrivals') {
            // Implement your sorting logic for Newest arrivals if needed
        }

        setSortedGigs(sortedGigs);
    }

    return (
        <section className="gig-filter">
            <article className='title-wrapper'>
                <ul className='breadcrumbs'>
                    <li><Link to="/"> <img src={homeBreadcrumb} alt="Fiverr"></img></Link></li>
                    <li> / {filterBy.tags[0]} </li>
                </ul>
                <h1>Website Development</h1>
                <div>
                    <p className="index-subtitle">Create, build, and develop your website with skilled website developers</p>
                </div>
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
                        <select className='sort-selector' value={sortOption} onChange={handleSortChange}>
                            <option value="Best selling">Best selling</option>
                            <option value="Recommended">Recommended</option>
                            <option value="Newest arrivals">Newest arrivals</option>
                        </select>
                    </li>
                </ul>
            </article>
        </section>
    );
}
