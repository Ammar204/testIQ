import axios from 'axios'

 const loadUser = (searchText) => {

    return (dispatch, getState) => {

        axios.get(`https://api.github.com/search/users?q=${searchText}+in:user`).then(function (response) {
            console.log(response.data.items)
            dispatch({ type: 'LOAD_USERS', payload: response.data.items})

        }).catch(function (error) {
            dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error })
        })
    }}
export default  loadUser