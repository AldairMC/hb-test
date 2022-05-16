import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Description from "../components/Description";

describe('<Description />', () => {
    test('renders context', () => {
        const info = {
            prev: null,
            next: "/email"
        }
        render(
            <Router>
                <Description info={info}/>
            </Router>
        )
        expect(screen.getByTestId('pagination')).toBeInTheDocument()
    })
})