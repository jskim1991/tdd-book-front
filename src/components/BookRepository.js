class BookRepository {

    getBooks() {
        return [
            {
                id: '122331441',
                title: 'Thinking Java'
            },
            {
                id: '121415555',
                title: 'TDD by example'
            }
        ];
    }
}

export default new BookRepository();