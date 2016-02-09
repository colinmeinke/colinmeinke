import { connect } from 'react-redux';

import Blog from './Blog/index';

const mapStateToProps = ({ page, tags }) => ({ page, tags });

export default connect( mapStateToProps )( Blog );
