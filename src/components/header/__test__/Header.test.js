import { render, screen } from '@testing-library/react';
import Header from "../Header";
import "@testing-library/jest-dom"
import { BrowserRouter as Router} from 'react-router-dom'





it('header with text search', async () => {
    render(<Router><Header/></Router>);
    const iconTextSearch = screen.getByText(/Login/i);
    expect(iconTextSearch).toBeInTheDocument();
});



it('header with testId', async () => {
    render(<Router><Header/></Router>);
    const iconTextComponent = screen.getByTestId("testid");
    expect(iconTextComponent).toBeInTheDocument();
});



it('header with testTitle', async () => {
    render(<Router><Header/></Router>);
    const iconTextComponent = screen.getByTitle("testTitle");
    expect(iconTextComponent).toBeInTheDocument();
});



it('header with testTitle', async () => {
    render(<Router><Header/></Router>);
    const iconTextComponent = screen.queryByText("cats");
    expect(iconTextComponent).not.toBeInTheDocument();
});



it('header links', async () => {
    render(<Router><Header/></Router>);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(7);
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