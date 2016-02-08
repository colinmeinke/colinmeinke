import { connect } from 'react-redux';

import LoadMorePosts from './LoadMorePosts/index';

const mapStateToProps = ({ page, tags }) => ({ page, tags });

export default connect( mapStateToProps )( LoadMorePosts );
