import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Pagination from "../components/Pagination";

describe('<Pagination />', () => {
    test('renders context', () => {
        const value = { next: null, prev: null }
        render(<Pagination next={value.next} prev={value.prev}/>)
    })
})