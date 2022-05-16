import React from "react";
import AppProvider from "../../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Perks from "../../components/steps/Checks";

describe('<Perks />', () => {
    test('renders context', () => {
        const value = { handlePerks: () => {} }
        const props = { info: { prev: "email", next: "address"}, changeInfo: () => {} }
        render(
            <AppProvider value={value}>
                <Router>
                    <Perks 
                        info={props.info}
                        changeInfo={props.changeInfo}
                    />
                </Router>
            </AppProvider>
        )
    })
})