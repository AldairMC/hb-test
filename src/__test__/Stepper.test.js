import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Stepper from "../components/Stepper";

describe('<Stepper />', () => {
    test('renders context', () => {
        const value = { data: null }
        render(
            <AppProvider value={value}>
                <Router>
                    <Stepper />
                </Router>
            </AppProvider>
        )
    })
})