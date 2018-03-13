import {connect} from 'react-redux'
import {getStorage} from "../../redux/reducers"
import Profile from "./Profile"
import * as actions from './../../redux/actions'



const mapStateToProps = (state, props) => ({
  ...getStorage(state),
})

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
