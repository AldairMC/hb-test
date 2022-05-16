import React from "react";
import AppProvider from "../../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Address from "../../components/steps/Address";

describe('<Address />', () => {
    test('renders context', () => {
        const value = { address: null }
        const props = { info: { prev: "email", next: "address"}, changeInfo: () => {} }
        render(
            <AppProvider value={value}>
                <Router>
                    <Address 
                        info={props.info}
                        changeInfo={props.changeInfo}
                    />
                </Router>
            </AppProvider>
        )
    })
})