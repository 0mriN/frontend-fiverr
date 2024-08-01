import { useSelector } from "react-redux";
import homeBreadcrumb from '../assets/img/svg/home-breadcrumb.svg';
import { Link, useSearchParams } from "react-router-dom";
import downArrow from '../assets/img/svg/down-arrow.svg';
import { useEffect, useState } from "react";
import { BudgetFilterForm } from "./BudgetFilterForm";
import { DeliveryTimeFilterForm } from "./DeliveryTimeFilterForm";
import { SortGigForm } from "./SortGigForm";
import { setFilter } from "../store/actions/gig.actions";
import { Box, ClickAwayListener } from "@mui/material";
import { StickyWrapper } from "./StickyWrapper";

export function GigFilter({ gigs }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy);
    const [sort, setSort] = useState(searchParams.get('sort') || filterBy.sort);
    const [budget, setBudget] = useState(searchParams.get('budget') || filterBy.budget);
    const [deliveryTime, setDeliveryTime] = useState(searchParams.get('deliveryTime') || filterBy.deliveryTime);

    // Modal state
    const [openBudget, setOpenBudget] = useState(false);
    const [openDeliveryTime, setOpenDeliveryTime] = useState(false);
    const [openSort, setOpenSort] = useState(false);

    // Open handlers
    function handleOpenBudget() {
        setOpenBudget(true);
    }

    function handleOpenDeliveryTime() {
        setOpenDeliveryTime(true);
    }

    function handleOpenSort() {
        setOpenSort(true);
    }

    // Close handlers
    function handleCloseBudget() {
        setOpenBudget(false);
    }

    function handleCloseDeliveryTime() {
        setOpenDeliveryTime(false);
    }

    function handleCloseSort() {
        setOpenSort(false);
    }

    // Click away handlers
    function handleClickAwayBudget() {
        setOpenBudget(false);
    }

    function handleClickAwayDeliveryTime() {
        setOpenDeliveryTime(false);
    }

    function handleClickAwaySort() {
        setOpenSort(false);
    }

    // Sync URL parameters with state
    useEffect(() => {
        const newSearchParams = new URLSearchParams();
        if (sort) newSearchParams.set('sort', sort);
        if (budget) newSearchParams.set('budget', budget);
        if (deliveryTime) newSearchParams.set('deliveryTime', deliveryTime);
        setSearchParams(newSearchParams);
    }, [sort, budget, deliveryTime, setSearchParams]);

    // Apply filters and update state/URL
    function applyFilter(ev, value, type) {
        ev.preventDefault();
        
        if (type === 'budget') setBudget(value);
        else if (type === 'deliveryTime') setDeliveryTime(value);
        
        handleCloseBudget();
        handleCloseDeliveryTime();
    }

    useEffect(() => {
        switch (filterBy.sort) {
            case 'bestSelling':
                setSort('Best selling');
                break;
            case 'recommended':
                setSort('Recommended');
                break;
            case 'newestArrivals':
                setSort('Newest arrivals');
                break;
            default:
                break;
        }
    }, [filterBy]);

    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <section className="gig-filter">
            <article className="title-container">
                <ul className="breadcrumbs flex align-center">
                    <li className="flex align-center">
                        <Link to="/"><img src={homeBreadcrumb} alt="Fiverr"></img></Link>&nbsp;
                    </li>
                    <li>
                        <span>/</span> <a>&nbsp;{capitalizeFirstLetter(filterBy.tags[0])}</a>
                    </li>
                </ul>
                <h1>Website Development</h1>
                <p className="index-subtitle">Create, build, and develop your website with skilled website developers</p>
            </article>

            <article className="filter-container">
                <StickyWrapper>
                    <div className="btn-container">
                        <div className="filter-btn budget flex align-center justify-center" onClick={handleOpenBudget}>
                            <p>Budget</p>
                            <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                            </svg>
                            <ClickAwayListener
                                mouseEvent="onMouseDown"
                                touchEvent="onTouchStart"
                                onClickAway={handleClickAwayBudget}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    {openBudget ? (
                                        <Box onClose={handleCloseBudget} onClick={ev => ev.stopPropagation()} className="user-modal">
                                            <BudgetFilterForm applyFilter={applyFilter} />
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                        </div>
                    </div>

                    <div className="btn-container">
                        <div className="filter-btn delivery-time flex align-center justify-center" onClick={handleOpenDeliveryTime}>
                            <p>Delivery time</p>
                            <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                            </svg>
                            <ClickAwayListener
                                mouseEvent="onMouseDown"
                                touchEvent="onTouchStart"
                                onClickAway={handleClickAwayDeliveryTime}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    {openDeliveryTime ? (
                                        <Box onClose={handleCloseDeliveryTime} onClick={ev => ev.stopPropagation()} className="user-modal">
                                            <DeliveryTimeFilterForm applyFilter={applyFilter} />
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                        </div>
                    </div>
                </StickyWrapper>
            </article>

            <article className="sort-container">
                <ul className="sort-by-wrapper flex">
                    <li>{gigs.length}+ Results</li>
                    <li className="sort-by">
                        <div className="form-container" onClick={handleOpenSort}>
                            <p>Sort By: <span>{sort}
                                <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                    <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z" />
                                </svg></span></p>
                            <ClickAwayListener
                                mouseEvent="onMouseDown"
                                touchEvent="onTouchStart"
                                onClickAway={handleClickAwaySort}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    {openSort ? (
                                        <Box onClose={handleCloseSort} onClick={ev => ev.stopPropagation()} className="user-modal">
                                            <SortGigForm handleCloseSort={handleCloseSort} />
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                        </div>
                    </li>
                </ul>
            </article>
        </section>
    );
}
