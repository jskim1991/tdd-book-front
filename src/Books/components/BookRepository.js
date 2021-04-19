import BookClient from "./BookClient";

class BookRepository {

    getBooks() {
        return BookClient.getBooksFromService();
    }

    getBook(id) {
        return {
            id: '123',
            title: 'Spring Book'
        };
    }
}

export default new BookRepository();