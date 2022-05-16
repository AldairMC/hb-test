import React from "react";
import "@testing-library/jest-dom/extend-expect";
import AppProvider from "../context/AppProvider";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Info from "../components/Info";

describe('<Info />', () => {
    test('renders context', () => {
        const value = { 
            handleInfo: () => {}, 
            handleValidEmail: () => {}
        }
        render(
            <AppProvider value={value}>
                <Router>
                    <Info />
                </Router>
            </AppProvider>
        )
    })
})