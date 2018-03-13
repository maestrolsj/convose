import {connect} from 'react-redux'
import {getStorage,getSuggestedWords,getNetwork} from "../../redux/reducers"
import SuggestionList from "./SuggestionList"
import * as actions from './../../redux/actions'



const mapStateToProps = (state, props) => ({
  ...getStorage(state),
  ...getSuggestedWords(state),
  ...getNetwork(state)
})

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList)
