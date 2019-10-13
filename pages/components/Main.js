import PropTypes from 'prop-types';
import Books from './index/Books';
import NoBooks from './index/NoBooks';
import '../../style/styles.css';

const Main = ({ books, noBooks, isLoading }) => {
  return (
    <>
      <div className="row main-books mx-auto">
        {!noBooks ? (
          <NoBooks isLoading={isLoading} />
        ) : !isLoading ? (
          <Books books={books} />
        ) : (
          <NoBooks isLoading={isLoading} />
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
