import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Logo from "../components/Logo";

describe('<Logo />', () => {

    const Component = () => {
        return (
            <Router>
                <Logo />
            </Router>
        )
    }

    test('renders context', () => {
        render(<Component />)
    })

    test('renders styles names', () => {
        render(<Component />)
        expect(screen.getByAltText("Logo"))
    })

    test('renders styles names', () => {
        render(<Component />)
        expect(screen.getByTestId('logo')).toBeInTheDocument()
    })
})