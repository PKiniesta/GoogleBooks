import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import BookInfo from '../components/book/BookInfo';

const Book = props => {
  const { book } = props;

  return <BookInfo book={book} />;
};

Book.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const book = await res.json();

  return { book };
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
