import axios from 'axios';

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

export default function reducer(state = initialState, action) {
    return state;
}

export default requestUserData = () => {
    let data = axios.get('/auth/user-data')
                    .then(res => res.data)
        return {
            type:REQUEST_USER_DATA
            payload: 
        }
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

case REQUEST_USER_DATA {
    
}