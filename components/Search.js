import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
const Search = ({ search, onSearch }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  const classChange = () => {
    if (scrollY > 150) return 'navbar fixed-top shrink';
    return 'navbar fixed-top';
  };

  const handleBtnFade = scrollY => {
    if (scrollY > 200) return 'btn-top turn-on';
    return 'btn-top';
  };

  const scroll = () => {
    window.addEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    scroll();
  }, []);

  return (
    <nav className={classChange()}>
      <form id="search" onSubmit={onSearch}>
        <div className="input-group add-on w-50 mx-auto">
          <input
            name="search"
            className="form-control mb-2 mt-2 w-25"
            onChange={search}
            id="search-input"
          />
          <div className="input-group-btn ">
            <button
              className="btn btn-default"
              type="submit"
              id="search-submit"
            >
              <FontAwesomeIcon icon="search" id="search-i" />
            </button>
          </div>
        </div>
      </form>
      <button
        onClick={() => {
          document.documentElement.scrollTop = 0;
        }}
        className={handleBtnFade(scrollY)}
      >
        <FontAwesomeIcon icon="arrow-up" id="icon-btn-top" />
      </button>
    </nav>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
export default Search;
