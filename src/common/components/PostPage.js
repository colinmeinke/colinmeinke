import { connect } from 'react-redux'

import PostPage from './PostPage/index'

const mapStateToProps = ({ page, post, postLoading, tags }) => ({ page, post, postLoading, tags })

export default connect(mapStateToProps)(PostPage)
