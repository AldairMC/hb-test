import React from "react";
import AppProvider from "../../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Floor from "../../components/steps/Floors";

describe('<Floor />', () => {
    test('renders context', () => {
        const value = { floor: null }
        const props = { info: { prev: "email", next: "address"}, changeInfo: () => {} }
        render(
            <AppProvider value={value}>
                <Router>
                    <Floor 
                        info={props.info}
                        changeInfo={props.changeInfo}
                    />
                </Router>
            </AppProvider>
        )
    })
})