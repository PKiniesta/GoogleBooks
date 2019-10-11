import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Main from './components/Main';
import Layout from './components/Layout';

const Index = () => {
  const [books, setBooks] = useState({ data: [], total: 0 });
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState({ isLoading: false });
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  const onChangeSearch = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const getBooks = async query => {
    setLoading({ isLoading: true });
    const res = await fetch(`${baseUrl}${query}&startIndex=0&maxResults=40`);
    const data = await res.json();

    setLoading({ isLoading: false });
    return data;
  };

  const onSearchClick = event => {
    getBooks(search).then(data =>
      setBooks({ data: data.items, total: data.totalItems })
    );
    event.preventDefault();
  };

  return (
    <Layout search={onChangeSearch} onSearch={onSearchClick}>
      <Main
        books={books.data}
        noBooks={books.total}
        isLoading={loading.isLoading}
      />
    </Layout>
  );
};

export default Index;
