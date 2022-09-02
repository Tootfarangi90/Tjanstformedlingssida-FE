import { render, screen } from '@testing-library/react';
import Header from "../Header";
import "@testing-library/jest-dom"




it('header with testId', async () => {
    render(<Header/>);
    const paragraphComponent = screen.getByTestId("testid");
    expect(paragraphComponent).toBeInTheDocument();
});


it('header with testTitle', async () => {
    render(<Header/>);
    const paragraphComponent = screen.getByTitle("testTitle");
    expect(paragraphComponent).toBeInTheDocument();
});


it('header links', async () => {
    render(<Header/>);
    const links = screen.getAllByRole('link');
    console.log(links.length)
    for(const link of links){
        expect(link).toBeInTheDocument();
    }
});