import { connect } from 'react-redux';

import PostsFilter from './PostsFilter/index';

const mapStateToProps = ({ tags }) => ({ tags });

export default connect( mapStateToProps )( PostsFilter );
