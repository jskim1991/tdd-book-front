import {render} from '@testing-library/react';
import MainScreen from "../components/MainScreen";

describe('MainScreen Unit Test', () => {
    test('main screen shows a book title', () => {
        const stubBookRepository = jest.fn();
        stubBookRepository.mockReturnValue([
            {
                title: 'Book Title1'
            }]
        );
        const getBooks_return_value = stubBookRepository();

        const {getByText} = render(<MainScreen books={getBooks_return_value}/>);

        expect(getByText('Book Title1')).toBeInTheDocument();
    });

    test('main screen shows nothing when empty', () => {
        const {queryAllByText} = render(<MainScreen books={[]}/>);
        expect(queryAllByText('Book Title1').length).toBe(0);
    });

    test('main screen shows multiple titles dynamically', () => {
        const stubBookRepository = jest.fn();
        stubBookRepository.mockReturnValue([
            {
                title: 'Book1'
            },
            {
                title: 'Book2'
            }]);
        const getBooks_return_value = stubBookRepository();

        const {getAllByText} = render(<MainScreen books={getBooks_return_value}/>);

        expect(getAllByText(/Book/).length).toBe(2);
    })
})
