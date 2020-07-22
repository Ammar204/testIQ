import axios from 'axios'

 const loadUser = (searchText) => {

    return (dispatch, getState) => {

        axios.get(`https://api.github.com/users/${searchText}`).then(function (response) {
            console.log(response.data)
            dispatch({ type: 'LOAD_USERS', payload: response.data})

        }).catch(function (error) {
            dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error })
        })
    }}
export default  loadUser