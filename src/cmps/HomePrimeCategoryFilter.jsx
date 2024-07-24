import { useNavigate } from "react-router"
import { getPrimeCategories } from "../services/util.service"


export function HomePrimeCategoryFilter({ srcs, setFilterBy, filterBy }) {
    const navigate = useNavigate()
    let categories = getPrimeCategories('home')
    categories = categories.map((category, idx) => ({ ...category, src: srcs[idx] }))

    function onClickCategory(category) {
        setFilterBy({ ...filterBy, tags: [category] })
        navigate('/gig')
    }

    return <ul className="home-prime-category-filter">
        {categories.map(category =>
            <li key={category.tag} onClick={() => onClickCategory(category.tag)}>
                <img src={category.src} alt={category.tag} loading="lazy" />
                <p className="sub-category">{category.title}</p>
            </li>
        )}
    </ul>
}