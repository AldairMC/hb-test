import { useReducer } from "react";

//types
import { HANDLE_INFO, HANDLE_CHECKS } from "../constants/types";

//Reducer and Context
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppProvider = ({ children }) => {
    
    const initialState = {
        names: null,
        email: null,
        address: null,
        floor: null,
        perks: null
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

    return (
        <AppContext.Provider
            value={{
                data: appState,
                names: appState.names,
                email: appState.email,
                address: appState.address,
                floor: appState.floor,
                perks: appState.perks,
                handleInfo,
                handlePerks
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;