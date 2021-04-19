import {cleanup, render, screen} from '@testing-library/react';
import BookClient from "../components/BookClient";
import App from "../../App";
import BookDetailView from "../views/BookDetailView";

describe('Book repository', () => {
    it('retrieves a list of Books', () => {
        jest.spyOn(BookClient, 'getBooksFromService')
            .mockImplementationOnce(() => {
                return [
                    {
                        id: '123',
                        title: 'Java Book'
                    },
                    {
                        id: '567',
                        title: 'Go Book'
                    }
                ]
        });


        render(<App />);


        expect(screen.getByText('Java Book')).toBeInTheDocument();
        expect(screen.getByText('Go Book')).toBeInTheDocument();
    });

    it('retrieves a book with a given id', () => {
        jest.spyOn(BookClient, 'getBookFromService')
            .mockImplementationOnce(() => {
                return {
                    id: '123',
                    title: 'Spring Book'
                }
        });


        render(<App />);


        expect(screen.getByText('Spring Book')).toBeInTheDocument();
    });

    it('gets a book with correct id', () => {
        const mockFn = jest.spyOn(BookClient, 'getBookFromService')
            // .mockImplementationOnce((id) => {
            //     return {
            //         'id': {id},
            //         'title': 'C Book'
            //     }
            // });
        BookClient.getBookFromService('999');


        render(<App />);


        // expect(mockFn).toHaveBeenCalledWith('9999');

        expect(screen.getByText('999')).toBeInTheDocument();
        expect(screen.getByText('C Book')).toBeInTheDocument();
    })
})