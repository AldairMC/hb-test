import React from "react";
import AppProvider from "../context/AppProvider";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Modal from "../components/Modal";

describe('<Modal />', () => {
    test('renders context', () => {
        const value = { isOpen: false, handleModalActived: () =>{}}
        render(
            <AppProvider value={value}>
                <Modal />
            </AppProvider>
        )
    })
})