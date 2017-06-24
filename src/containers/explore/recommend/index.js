import React from 'react'
import {
  PropTypes,
  ScrollView,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { ActivityHorizontalList } from '@components'
import * as Selectors from '@selectors'
import { bindActionCreators, connect } from '@store'

const onExperienceItemPress = (props) => ({ data }) => {
  props.navigatorActions.toExperienceDetail(data.id)
}

const onListingItemPress = (props) => ({ data }) => {
  props.navigatorActions.toListingDetail(data.id)
}

const Recommend = (props, { theme }) => {
  return (
    <ScrollView>
      <ActivityHorizontalList tag="experiences" style={{ marginTop: theme.layout.spacing }}
        data={props.experiencesAsActivity}
        imageRatio={0.67}
        title="Experiences"
        onItemPress={onExperienceItemPress(props)}
        onSeeAllPress={props.onSeeAllPress} />
      <ActivityHorizontalList tag="homes" style={{ marginTop: theme.layout.spacing }}
        data={props.listingsAsActivity}
        imageRatio={1.5}
        maxItemWidth={240}
        title="Listings"
        onItemPress={onListingItemPress(props)}
        onSeeAllPress={props.onSeeAllPress} />
      <View style={{ height: theme.layout.spacing * 2 }} />
    </ScrollView>
  )
}

Recommend.contextTypes = {
  theme: PropTypes.any
}

Recommend.propTypes = {
  onSeeAllPress: PropTypes.func
}

Recommend.defaultProps = {
  onSeeAllPress: () => { }
}

const mapStateToProps = () => {
  const getExperiencesAsActivity = Selectors.experience.filterAndConvertToActivity()
  const getListingsAsActivity = Selectors.listing.filterAndConvertToActivity()
  return (state, props) => ({
    experiencesAsActivity: getExperiencesAsActivity(state, props),
    listingsAsActivity: getListingsAsActivity(state, props)
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigatorActions: bindActionCreators(Actions.navigator, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
