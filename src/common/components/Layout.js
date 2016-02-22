import { connect } from 'react-redux';

import Layout from './Layout/index';

const mapStateToProps = ({ url }) => ({ url });

export default connect( mapStateToProps )( Layout );
