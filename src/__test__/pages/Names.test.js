import React from "react";
import AppProvider from "../../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Names from "../../components/steps/Names";

describe('<Names />', () => {
    test('renders context', () => {
        const value = { names: null }
        const props = { info: { prev: "email", next: "address"}, changeInfo: () => {} }
        render(
            <AppProvider value={value}>
                <Router>
                    <Names 
                        info={props.info}
                        changeInfo={props.changeInfo}
                    />
                </Router>
            </AppProvider>
        )
    })
})