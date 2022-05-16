import React, { useContext } from "react";
import AppContext from '../context/AppContext'
import { Routes, Route } from "react-router-dom";
import { Paths } from "../constants/paths";

import { validNumber } from "../utils/helpes";

const Info = () => {
    const { handleInfo } = useContext(AppContext)

    const changeInfo = (e) => {
        const { value, name } = e.target
        if(name === "floor"){
            const valid = validNumber(value)
            handleInfo(valid, name)
        } else {
            handleInfo(value, name)
        }
    }
    
    return (
        <Routes>
            {
                Paths.map(info => (
                    <Route 
                        path={info.path}
                        element={
                            <info.component 
                                {...{
                                    info,
                                    changeInfo
                                }}
                            />
                        }
                    />
                ))
            }
        </Routes>
    )
}

export default Info;