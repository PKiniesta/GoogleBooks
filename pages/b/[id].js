import { useState } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import StarRatings from '../../node_modules/react-star-ratings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = props => {
  const [loading, setLoading] = useState(true);
  const { book } = props;

  const handleImage = book => {
    try {
      return book.volumeInfo.imageLinks.large
        ? book.volumeInfo.imageLinks.large
        : book.volumeInfo.imageLinks.thumbnail;
    } catch (e) {
      return '/noimg.png';
    }
  };

  const Authors = ({ book }) => (
    <>{book.volumeInfo.authots ? book.volumeInfo.authots : 'BRAK DANYCH'}</>
  );

  const handleImageLoad = () => {
    setLoading(false);
  };

  const imageClass = loading => {
    if (loading) return 'col-6 col-md-12 id-book-img';
    return 'col-6 col-md-12';
  };

  const spinnerClass = loading => {
    if (loading) return '';
    return 'book-spinner';
  };

  return (
    <>
      <div className="d-flex flex-row flex-wrap ">
        <div className="col-12 px-0 py-3 col-md-4 text-center">
          <FontAwesomeIcon
            className={spinnerClass(loading)}
            icon="circle-notch"
            fixedWidth
            size="10x"
            spin
          />
          {console.log(book)}
          <img
            src={handleImage(book)}
            onLoad={handleImageLoad}
            className={imageClass(loading)}
          />
        </div>
        <div className="col-12 col-md-8 pl-0 py-3">
          <h3>{book.volumeInfo.title}</h3>
          <div>{book.volumeInfo.publisher}</div>
          <div>{book.volumeInfo.publishedDate}</div>
          <div>
            {!book.volumeInfo.description
              ? 'BRAK DANYCH'
              : book.volumeInfo.description}
          </div>
          <div className="d-flex flex-row col-12 px-0">
            <StarRatings
              rating={
                book.volumeInfo.averageRating
                  ? book.volumeInfo.averageRating
                  : 0
              }
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension={'20px'}
              starSpacing={'0px'}
            />
            <div>
              (
              {!book.volumeInfo.ratingsCount ? 0 : book.volumeInfo.ratingsCount}
              )
            </div>
          </div>
          <div>
            <Authors book={book} />
          </div>
          <a href={book.volumeInfo.previewLink}>
            <button className="btn btn-secondary">STRONA GOOGLE</button>
          </a>
          <Link href="/">
            <button className="btn btn-secondary ml-3">WRÓĆ</button>
          </Link>
        </div>
      </div>
    </>
  );
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
