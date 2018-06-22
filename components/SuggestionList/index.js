import { connect } from 'react-redux'
import { getStorage, getSuggestedWords, getNetwork } from "../../redux/reducers"
import SuggestionList from "./SuggestionList"
import { fetchSuggestion, clearSuggestions, updateProfile } from './../../redux/actions'

const mapStateToProps = (state, props) => ({
  ...getStorage(state),
  ...getSuggestedWords(state),
  ...getNetwork(state)
})

const mapDispatchToProps = {
  fetchSuggestion,
  clearSuggestions,
  updateProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList)
