import {cleanup, render, screen} from '@testing-library/react';
import BookRepository from "../components/BookRepository";
import App from "../../App";

describe('MainScreen Unit Test', () => {

    it('shows a list of books', () => {

        jest.spyOn(BookRepository, 'getBooks').mockImplementationOnce(() => {
            return [
                {
                    id: '1',
                    title: 'Thinking Java'
                },
                {
                    id: '2',
                    title: 'TDD by example'
                }
            ];
        });


        render(<App />);


        expect(screen.getByText('Thinking Java')).toBeInTheDocument();
        expect(screen.getByText('TDD by example')).toBeInTheDocument();
    });
})
