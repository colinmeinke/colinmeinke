import { connect } from 'react-redux';

import Blog from './Blog/index';

const mapStateToProps = ({ tags }) => ({ tags });

export default connect( mapStateToProps )( Blog );
