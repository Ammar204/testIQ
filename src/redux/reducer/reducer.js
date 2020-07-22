
import dummy from "../../dummydata/categories.json"
const init = {}
const reducer = (state = init, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            state = {...action.payload}
            console.log("in reducer",state)
            return state
            break
        case 'LOAD_USERS_FAILURE':
            state = {...action.payload}
            return state
            break
        default:
            return state
    }
}

export default reducer