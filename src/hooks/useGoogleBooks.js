import { useState, useEffect } from "react";
import { getBooks } from "../api/apiCalls";

export default function useGoogleBooks(query, maxResults) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getBooks(query, maxResults)
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, maxResults]);

  return { isLoading, error, books };
}
