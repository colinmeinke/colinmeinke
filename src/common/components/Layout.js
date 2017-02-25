import { connect } from 'react-redux'

import Layout from './Layout/index'

const mapStateToProps = ({ rootUrl, url }) => ({ rootUrl, url })

export default connect(mapStateToProps)(Layout)
