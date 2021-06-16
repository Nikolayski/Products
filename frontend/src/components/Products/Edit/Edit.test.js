import React from 'react';
import { render, screen, act} from "@testing-library/react";
import Edit from './Edit';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            model: "Samsung",
            price: "1500"
        })
            
    })
})

describe("Edit", () => {
    it("should load proper Entity model", async () => {
        await act(async () => render(<Edit id="60b4cede6e48403b5c42362b" model="Samsung"/>));
        expect(screen.getByText("Samsung")).ToBeInTheDocument();
    })

    it("should load proper Entity price", async () => {
        await act(async () => render(<Edit id="60b4cede6e48403b5c42362b" price="1500"/>));
        expect(screen.getByText("1500")).ToBeInTheDocument();
    })
})