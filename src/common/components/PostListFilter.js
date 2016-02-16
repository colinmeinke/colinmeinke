import { connect } from 'react-redux';

import PostListFilter from './PostListFilter/index';

const mapStateToProps = ({ tags }) => ({ tags });

export default connect( mapStateToProps )( PostListFilter );
