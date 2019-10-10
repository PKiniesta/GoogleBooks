import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Main from './components/Main';
import Layout from './components/Layout';

const Index = () => {
  const [books, setBooks] = useState({ data: [], total: 0 });
  const [search, setSearch] = useState();
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  const onChangeSearch = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const getBooks = async query => {
    const res = await fetch(`${baseUrl}${query}&startIndex=0&maxResults=40`);
    const data = await res.json();
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
      <Main books={books.data} noBooks={books.total} />
    </Layout>
  );
};

export default Index;
