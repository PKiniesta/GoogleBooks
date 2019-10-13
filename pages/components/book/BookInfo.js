import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer';

const Authors = ({ authors }) => (
  <>
    {!authors ? (
      'BRAK DANYCH'
    ) : (
      <ul>
        {authors.map(a => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    )}
  </>
);

Authors.propTypes = {
  authors: PropTypes.array
};

const BookInfo = ({ book }) => {
  const [loading, setLoading] = useState(true);

  const handleTitle = book => {
    console.log(book);
    try {
      return book.volumeInfo.title;
    } catch (e) {
      return 'BRAK DANYCH';
    }
  };

  const handleImage = book => {
    try {
      return book.volumeInfo.imageLinks.large
        ? book.volumeInfo.imageLinks.large
        : book.volumeInfo.imageLinks.thumbnail;
    } catch (e) {
      return '/noimg.png';
    }
  };

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

  const htmlDescription = description => ({ __html: description });
  return (
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
        <h3>{handleTitle(book)}</h3>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div className="my-2">Autorzy:</div>
          <Authors authors={0} />
        </div>
        <div className="d-flex flex-row col-12 px-0">
          <StarRatings
            rating={2}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension={'20px'}
            starSpacing={'0px'}
          />
          <div></div>
        </div>
        <a>
          <button className="btn btn-secondary">STRONA GOOGLE</button>
        </a>
        <Link href="/">
          <button className="btn btn-secondary ml-3">WRÓĆ</button>
        </Link>
      </div>
      <div className="col-12 px-0">
        <Footer />
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookInfo;
