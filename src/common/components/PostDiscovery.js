import { connect } from 'react-redux';

import PostDiscovery from './PostDiscovery/index';

const mapStateToProps = ({ morePosts, page, postList }) => ({ morePosts, page, postList });

export default connect( mapStateToProps )( PostDiscovery );
