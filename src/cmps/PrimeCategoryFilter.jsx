import { useNavigate } from "react-router"
import { getPrimeCategories } from "../services/util.service"


export function PrimeCategoryFilter({ setFilterBy, filterBy }) {
    const navigate = useNavigate()

    const categories = getPrimeCategories('header')

    function onClickCategory(category) {
        setFilterBy({ ...filterBy, tags: [category] })
        navigate('/gig')
    }

    return <section className="prime-category-filter">
        <ul className="flex">
            {categories.map(category =>  // category { title: , tag: }
                <li key={category.tag} onClick={() => onClickCategory(category.tag)}>{category.title}</li>
            )}
        </ul>
    </section>
}