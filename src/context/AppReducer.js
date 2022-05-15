import { HANDLE_INFO } from "../constants/types";

const AppReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case HANDLE_INFO:
            console.log(payload)
            return {
                ...state, 
                [`${payload.name}`]: payload.value
            }

        default:
            return state;
    }

}

export default AppReducer;