import { useReducer } from "react";

//types

//Reducer and Context
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppProvider = ({ children }) => {
    
    const initialState = {
        names: "",
        email: "",
        address: "",
        floor: null,
    }

    const [ appState, dispatch ] = useReducer(AppReducer, initialState)
    
    // Code Here

    return (
        <AppContext.Provider
            value={{
                names: appState.names,
                email: appState.email,
                address: appState.address,
                floor: appState.floor
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;