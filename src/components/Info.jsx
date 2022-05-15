import React from "react";
import { Routes, Route } from "react-router-dom";
import { Paths } from "../constants/paths";

const Info = () => {
    
    return (
        <Routes>
            {
                Paths.map(info => (
                    <Route 
                        path={info.path}
                        element={
                            <info.component info={info}
                        />}
                    />
                ))
            }
        </Routes>
    )
}

export default Info;