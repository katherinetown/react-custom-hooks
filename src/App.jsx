import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("quilting");

  const [maxResults, setMaxResults] = useState(5);
  return (
    <div className="App">
      <Header title="Book Store" />
      <QueryBar setQuery={setQuery} />
      <BooksGrid
        query={query}
        maxResults={maxResults}
      />
    </div>
  );
}

export default App;
