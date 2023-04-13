import { getPublishersBooks } from "../api/apiCalls";
import { useState, useEffect } from "react";

export default function usePublishersBooks(publisher, maxResults = 3) {
  const [publishersBooks, setPublishersBooks] = useState([]);
  const [publisherBooksError, setPublisherBooksError] = useState(false);
  const [isPublisherBooksLoading, setIsPublisherBooksLoading] = useState(true);

  useEffect(() => {
    setIsPublisherBooksLoading(true);
    setPublisherBooksError(false);
    getPublishersBooks(publisher, maxResults)
      .then((books) => {
        setPublishersBooks(books);
      })
      .catch((err) => {
        setPublisherBooksError(true);
      })
      .finally(() => {
        setIsPublisherBooksLoading(false);
      });
  }, [publisher, maxResults]);

  return { isPublisherBooksLoading, publisherBooksError, publishersBooks };
}
