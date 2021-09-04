
const initialState = {
    token: [],
    isLoggedIn: false
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type){
        case "USER_AUTHENTICATED" :
             sessionStorage.setItem('token', action.payload.token);
        return {
            ...state, ...{
                token: action.payload.token,
                isLoggedIn: true,
            }
        }
        case "SET_TOKEN":
            return {...state, token:action.payload}
        case "LOGOUT" :
            sessionStorage.clear();
            return {...state, token:[], isLoggedIn: false}
        default:
            return state
    }
}

export default authenticationReducer;