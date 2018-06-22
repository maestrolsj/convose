import { connect } from 'react-redux'
import { getStorage } from '../../redux/reducers'
import Home from './Home'
import { getAuthStorage } from './../../redux/actions'

const mapStateToProps = (state, props) => ({
  ...getStorage(state)
})

const mapDispatchToProps = {
  getAuthStorage
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
