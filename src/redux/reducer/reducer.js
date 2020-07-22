
import dummy from "../../dummydata/categories.json"
const init = dummy.items
const reducer = (state = init, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            state = [...action.payload]
            return state
            break
        case 'LOAD_USERS_FAILURE':
            state = [...action.payload]
            return state
            break
        default:
            return state
    }
}

export default reducer