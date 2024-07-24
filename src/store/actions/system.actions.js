import { store } from '../store'
import { LOADING_START, LOADING_DONE, SHOW_SEARCH_BAR, SHOW_CATEGORIES_BAR } from '../reducers/system.reducer'


export function showSearchBar(isShow) {
    try {
        store.dispatch({ type: SHOW_SEARCH_BAR, showSearchBar: isShow })
    } catch (err) {
        console.log('Oops, something went wrong', err)
        throw err
    }
}