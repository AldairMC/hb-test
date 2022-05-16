import React from "react";
import AppProvider from "../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Resumen from "../components/Resumen";

describe('<Resumen />', () => {
    test('renders context', () => {
        const value = { names: null, email: null, address: null, floor: null, perks: null }
        render(
            <AppProvider value={value}>
                <Resumen />
            </AppProvider>
        )
    })
})