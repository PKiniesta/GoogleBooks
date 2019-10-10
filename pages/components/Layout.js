import PropTypes from 'prop-types';
import Search from './Search';
import Footer from './Footer';

const Layout = props => {
  const { children, search, onSearch } = props;
  return (
    <div>
      <Search search={search} onSearch={onSearch} />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Layout;
