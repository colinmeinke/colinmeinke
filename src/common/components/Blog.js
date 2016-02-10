import { connect } from 'react-redux';

import Blog from './Blog/index';

const mapStateToProps = ({ morePosts, page, posts }) => ({ morePosts, page, posts });

export default connect( mapStateToProps )( Blog );
