import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Modal from "react-modal";
import useGoogleBooks from "../hooks/useGoogleBooks";
import usePublishersBooks from "../hooks/usePublishersBooks";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function BooksGrid({ query }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [publisher, setPublisher] = useState("");

  const { isLoading, error, books } = useGoogleBooks(query);
  const { publishersBooks, isPublisherBooksLoading, publisherBooksError } =
    usePublishersBooks(publisher, 3);

  function closeModal() {
    setIsOpen(false);
    setPublisher("");
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  return (
    <main className="books__grid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Publishers other books"
        ariaHideApp={false}
      >
        <div>
          <h2 className="publisherbook">More books by this publisher</h2>
          <ul>
            {publishersBooks.map((book) => {
              return (
                <li key={book.id}>
                  <h3 className="publisherbook">{book.volumeInfo.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </Modal>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            imgUrl={book.volumeInfo}
            setIsOpen={setIsOpen}
            booksPublisher={book.volumeInfo.publisher}
            setPublisher={setPublisher}
          />
        );
      })}
    </main>
  );
}
