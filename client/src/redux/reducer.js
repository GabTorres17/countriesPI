import { CHECKING, GET_COUNTRY_BY_ID, BACK_NAVIGATION, CLOSE, CONTINENTS, ERROR, GET_ACTIVITIES, GET_ALL_COUNTRIES, GET_SELECTED_ACTIVITY, GET_SORT, POPULATION, SEARCH_BY_NAME } from "./action-types";



const initialState = {
    countries: [],
    countryById: [],
    sorting: [],
    error: false,
    check: false,
    activities: [],
    history: window.history
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            const a = [...action.payload]
            return {
                ...state,
                countries: action.payload,
                sorting: a,
            }
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                countryById: action.payload,
            }

        case BACK_NAVIGATION:
            if (state.history && state.history.goBack) {
                state.history.goBack();
            }
            return { ...state };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case GET_SELECTED_ACTIVITY:
            const result = state.countries.filter(e => e.countryActivities.some((activity) => activity.name == action.payload))
            return {
                ...state,
                sorting: result,
            }
        case GET_SORT:
            const sort = action.payload === 'asc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return 1;

                if (a.name < b.name) return -1;

                return 0;
            }) : action.payload === 'desc' ? state.sorting.sort((a, b) => {
                if (a.name > b.name) return -1;

                if (a.name < b.name) return 1;

                return 0;
            }) : [...state.countries]
            return {
                ...state,
                sorting: sort
            }
        case POPULATION:
            const sortPopulation = action.payload === 'high' ?
                state.sorting.sort((a, b) => b.poblacion - a.poblacion) :
                action.payload === 'low' ? state.sorting.sort((a, b) => a.poblacion - b.poblacion) : [...state.countries]
            return {
                ...state,
                sorting: sortPopulation
            }

        case CONTINENTS:
            const select = [...state.countries]
            let filter = select.filter(e => e.continente === action.payload)
            return {
                ...state,
                sorting: action.payload === 'all' ? [...state.countries] : filter
            }

        case SEARCH_BY_NAME:
            return {
                ...state,
                sorting: action.payload
            }

        case 'DELETE_FILTERS':
            return {
                ...state,
                sorting: state.countries
            }
        case ERROR:
            return {
                ...state,
                error: true
            }
        case CLOSE:
            return {
                ...state,
                error: state.error === false ? false : false,
                check: state.check === false ? false : false
            }
        case CHECKING:
            return {
                ...state,
                check: true
            }
        default: return state
    }
}

export default reducer;
