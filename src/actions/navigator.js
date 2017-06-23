import { NavigationActions } from 'react-navigation'

const navigate = (navigator, routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }))
}

export const toExperienceDetail = (id) => (dispatch, { navigator }) => {
  navigate(navigator, 'experienceDetail', { id })
}

export const toListingDetail = (id) => (dispatch, { navigator }) => {
  navigate(navigator, 'listingDetail', { id })
}
