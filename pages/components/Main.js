import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Link from 'next/link';
import StarRatings from '../../node_modules/react-star-ratings';
import '../../style/styles.css';

const Main = ({ books, noBooks, isLoading }) => {
  const handleImage = book => {
    try {
      return book.volumeInfo.imageLinks.thumbnail;
    } catch (e) {
      return '/noimg.png';
    }
  };
  const handleTitle = book => {
    console.log(book);
    try {
      return book.volumeInfo.title.length > 25
        ? titleText(book.volumeInfo.title)
        : book.volumeInfo.title;
    } catch (e) {
      return 'UKNOWN TITLE';
    }
  };

  const titleText = title => {
    const short = title.substring(0, 25) + '..';
    return short;
  };

  const Books = props => {
    const { books } = props;
    return books.map(book => (
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-xl-3 my-4 card-main"
        key={book.id}
      >
        <div className="card text-center h-100  py-3 px-0 p-xl-3">
          <img
            src={handleImage(book)}
            className="img-fluid card-img mx-0"
            alt={book.volumeInfo.title}
          />
          <div className="card-body">
            <p className="card-title">{handleTitle(book)}</p>
          </div>

          <div className="card-rating">
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
            <span id="rating-count">
              {book.volumeInfo.ratingsCount
                ? `(${book.volumeInfo.ratingsCount})`
                : `(0)`}
            </span>
          </div>
          <Link href="/b/[id]" as={`/b/${book.id}`}>
            <a>
              <button className="btn btn-secondary">POKAŻ</button>
            </a>
          </Link>
        </div>
      </div>
    ));
  };

  const HandleIcon = props => {
    const { isLoading } = props;
    return isLoading ? (
      <div className="d-flex  no-books text-center mx-auto">
        <FontAwesomeIcon
          icon="circle-notch"
          id="main-noBooks"
          fixedWidth
          size="10x"
          spin
        />
      </div>
    ) : (
      <div className="d-flex  no-books text-center mx-auto">
        <FontAwesomeIcon
          icon="search"
          id="main-noBooks"
          fixedWidth
          size="10x"
        />
      </div>
    );
  };

  return (
    <>
      <div className="row main-books mx-auto">
        {!noBooks ? (
          <HandleIcon isLoading={isLoading} />
        ) : !isLoading ? (
          <Books books={books} />
        ) : (
          <div className="d-flex  no-books text-center mx-auto">
            <FontAwesomeIcon
              icon="circle-notch"
              id="main-noBooks"
              fixedWidth
              size="10x"
              spin
            />
          </div>
        )}
      </div>
    </>
  );
};

Main.propTypes = {
  books: PropTypes.array.isRequired,
  noBooks: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Main;
