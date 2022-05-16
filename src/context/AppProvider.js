import { useReducer } from "react";

//types
import { HANDLE_INFO, HANDLE_CHECKS, MODAL_ACTIVED, VALID_EMAIL } from "../constants/types";

//Reducer and Context
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppProvider = ({ children }) => {
    
    const initialState = {
        names: null,
        email: null,
        address: null,
        floor: null,
        perks: null, 
        isOpen: false,
        isValid: false
    }

    const [ appState, dispatch ] = useReducer(AppReducer, initialState)
    
    const handleInfo = (value, name) => {
        dispatch({
            type: HANDLE_INFO,
            payload: { value, name }
        })
    }

    const handlePerks = (checks) => {
        dispatch({
            type: HANDLE_CHECKS,
            payload: checks
        })
    }

    const handleModalActived = (state) => {
        dispatch({
            type: MODAL_ACTIVED,
            payload: state
        })
    }

    const handleValidEmail = (state) => {
        dispatch({
            type: VALID_EMAIL,
            payload: state
        })
    }

    return (
        <AppContext.Provider
            value={{
                data: appState,
                names: appState.names,
                email: appState.email,
                address: appState.address,
                floor: appState.floor,
                perks: appState.perks,
                isOpen: appState.isOpen,
                isValid: appState.isValid,
                handleInfo,
                handlePerks,
                handleModalActived,
                handleValidEmail
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;