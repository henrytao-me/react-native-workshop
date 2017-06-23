import { combineReducers } from 'redux'

import experiences from './experiences'
import listings from './listings'
import settings from './settings'

export default combineReducers({
  experiences,
  listings,
  settings
})
