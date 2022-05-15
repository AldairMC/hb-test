import { useReducer } from "react";

//types
import { HANDLE_INFO } from "../constants/types";

//Reducer and Context
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppProvider = ({ children }) => {
    
    const initialState = {
        names: "",
        email: "",
        address: "",
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

    return (
        <AppContext.Provider
            value={{
                data: appState,
                names: appState.names,
                email: appState.email,
                address: appState.address,
                floor: appState.floor,
                perks: appState.perks,
                handleInfo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;