import React from "react";
import AppProvider from "../../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Email from "../../components/steps/Email";

describe('<Email />', () => {
    test.skip('renders context', () => {
        const value = { email: "email@gmail.com", isValid: false }
        const props = { info: { prev: "email", next: "address"}, changeInfo: () => {} }
        render(
            <AppProvider value={value}>
                <Router>
                    <Email 
                        info={props.info}
                        changeInfo={props.changeInfo}
                    />
                </Router>
            </AppProvider>
        )
    })
})