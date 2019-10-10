import PropTypes from 'prop-types';

const Post = (props) => {
  const { show } = props;
  return (
    <>
      <h1>{show.name}</h1>
      <div>{show.summary}</div>
      <img src={show.image.medium} alt="" />
    </>
  );
};

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};

Post.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  show: PropTypes.shape({
    name: 'Batman DEF',
    summary: 'DEF',
    image: PropTypes.shape({
      medium: 'Default',
    }),
  }),
};
export default Post;
