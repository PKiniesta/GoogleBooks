import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const NoBooks = props => {
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
      <FontAwesomeIcon icon="search" id="main-noBooks" fixedWidth size="10x" />
    </div>
  );
};

NoBooks.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default NoBooks;
