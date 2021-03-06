import PropTypes from 'prop-types';
import Search from '../components/Search';
import Footer from '../components/Footer';

const LayoutIndex = props => {
  const { children, search, onSearch } = props;
  return (
    <div>
      <Search search={search} onSearch={onSearch} />
      {children}
      <Footer />
    </div>
  );
};

LayoutIndex.propTypes = {
  children: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default LayoutIndex;
