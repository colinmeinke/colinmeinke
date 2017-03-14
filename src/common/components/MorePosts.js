import { connect } from 'react-redux';

import MorePosts from './MorePosts/index';

const mapStateToProps = ({ page, tags }) => ({ page, tags });

export default connect(mapStateToProps)(MorePosts);
