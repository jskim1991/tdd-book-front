import BookRepository from "../components/BookRepository";

const BookDetailView = () => {

    const book = BookRepository.getBook('some id');

    return (
        <div>
            <p>{book.id}</p>
            <p>{book.title}</p>
        </div>
    );
}

export default BookDetailView;