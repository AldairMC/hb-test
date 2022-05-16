import { HANDLE_INFO, HANDLE_CHECKS } from "../constants/types";

const AppReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case HANDLE_INFO:
            return {
                ...state, 
                [`${payload.name}`]: payload.value
            }
        case HANDLE_CHECKS:
            return {
                ...state, 
                perks: payload
            }
        default:
            return state;
    }

}

export default AppReducer;