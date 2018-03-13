import {connect} from 'react-redux'
import {getStorage} from "../../redux/reducers"
import Home from "./Home"
import * as actions from './../../redux/actions'



const mapStateToProps = (state, props) => ({
  ...getStorage(state),
})

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
