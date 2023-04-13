import axios from "axios";

const googleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const getBooks = (query, maxResults = 10) => {
  return googleBooks
    .get(`/`, { params: { q: query, maxResults: maxResults } })
    .then(({ data }) => {
      return data.items;
    });
};

export const getPublishersBooks = (publisher, limit = 10) => {
  return googleBooks
    .get(`?q=inpublisher:${publisher}&maxResults=${limit}`)
    .then(({ data }) => {
      return data.items;
    });
};
