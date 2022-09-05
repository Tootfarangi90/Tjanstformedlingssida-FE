import { render, screen } from '@testing-library/react';
import Header from "../Header";
import "@testing-library/jest-dom"




it('header with text search', async () => {
    render(<Header/>);
    const iconTextSearch = screen.getByText(/Meddelanden/i);
    expect(iconTextSearch).toBeInTheDocument();
});



it('header with testId', async () => {
    render(<Header/>);
    const iconTextComponent = screen.getByTestId("testid");
    expect(iconTextComponent).toBeInTheDocument();
});



it('header with testTitle', async () => {
    render(<Header/>);
    const iconTextComponent = screen.getByTitle("testTitle");
    expect(iconTextComponent).toBeInTheDocument();
});



it('header with testTitle', async () => {
    render(<Header/>);
    const iconTextComponent = screen.queryByText("cats");
    expect(iconTextComponent).not.toBeInTheDocument();
});



it('header links', async () => {
    render(<Header/>);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(5);
});


//Gamla sättet med Mikael
/*it('header links', async () => {
    render(<Header/>);
    const links = screen.getAllByRole('link');
    console.log(links.length)
    for(const link of links){
        expect(link).toBeInTheDocument();
    }
});*/