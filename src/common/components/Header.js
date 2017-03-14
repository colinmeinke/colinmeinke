import { connect } from 'react-redux';

import Header from './Header/index';

const mapStateToProps = ({ url }) => ({ url });

export default connect(mapStateToProps)(Header);
