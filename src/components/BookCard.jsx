export default function BookCard({
  booksPublisher,
  setPublisher,
  title,
  imgUrl,
  setIsOpen,
}) {
  const handleModal = () => {
    setIsOpen(true);
    setPublisher(booksPublisher);
  };
  return (
    <div onClick={handleModal}>
      <p> {title}</p>
      <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
    </div>
  );
}
