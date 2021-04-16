import {render} from '@testing-library/react';
import MainScreen from "../components/MainScreen";

describe('MainScreen Unit Test', () => {

    let stubBookRepository;

    beforeEach(() => {
        stubBookRepository = jest.fn();

    })

    test('shows a book title', () => {
        stubBookRepository.mockReturnValue([
            {
                title: 'Book Title1'
            }]);
        const getBooks_return_value = stubBookRepository();

        const {getByText} = render(<MainScreen books={getBooks_return_value}/>);

        expect(getByText('Book Title1')).toBeInTheDocument();
    });

    test('shows nothing when empty', () => {
        const {queryAllByText} = render(<MainScreen books={[]}/>);
        expect(queryAllByText('Book Title1').length).toBe(0);
    });

    test('ㅂshows multiple titles dynamically', () => {
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
