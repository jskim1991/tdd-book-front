import MainScreen from "./components/MainScreen";
import BookRepository from "./components/BookRepository";

const bookRepository = BookRepository;

function App() {
  return (
    <MainScreen bookRepository={bookRepository} />
  );
}

export default App;
