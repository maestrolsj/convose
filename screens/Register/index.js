import {connect} from 'react-redux'
import {registerUser} from "../../redux/actions"
import {getRegister} from "../../redux/reducers"
import Register from "./Register"
import * as actions from './../../redux/actions'

const mapStateToProps = (state, props) => ({
  ...getRegister(state),
})

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
