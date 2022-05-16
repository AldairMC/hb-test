import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NoFound from "../components/NoFound";
describe('<NoFound />', () => {
    test('renders context', () => {
        const info = {
            prev: null,
            next: "/email"
        }
        render(
            <Router>
                <NoFound info={info}/>
            </Router>
        )
        expect(screen.getByTestId('pagination')).toBeInTheDocument()
    })
})