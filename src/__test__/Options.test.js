import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Options from "../components/Options";

describe('<Options />', () => {
    test('renders context', () => {
        const value = { 
            info: { path: "email" }, 
            handlePatActive: () => {}, 
            data: { info: { path: "email" }}, 
            pathActived: "/email"
        }
        render(
            <Router>
                <Options
                    info={value.info} 
                    handlePatActive={value.handlePatActive}
                    data={value.data}
                    pathActived={value.pathActived}
                />
            </Router>
        )
    })
})