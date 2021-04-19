import BookRepository from "./Books/components/BookRepository";
import BookListView from "./Books/views/BookListView";
import BookDetailView from "./Books/views/BookDetailView";

const bookRepository = BookRepository;

function App() {
    return (
        <div>
            <BookListView />
            <BookDetailView />
        </div>
    );
}

export default App;
