import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { ActivityHorizontalList } from '@components'
import * as Selectors from '@selectors'
import { bindActionCreators, connect } from '@store'

class Recommend extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    onSeeAllPress: PropTypes.func
  }

  static defaultProps = {
    onSeeAllPress: () => { }
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <ActivityHorizontalList tag="experiences" style={{ marginTop: theme.layout.spacing }}
          data={this.props.experiencesAsActivity}
          imageRatio={0.67}
          title="Experiences"
          onSeeAllPress={this.props.onSeeAllPress} />
        <ActivityHorizontalList tag="homes" style={{ marginTop: theme.layout.spacing }}
          data={this.props.listingsAsActivity}
          imageRatio={1.5}
          maxItemWidth={240}
          title="Listings"
          onSeeAllPress={this.props.onSeeAllPress} />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
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
    settingsActions: bindActionCreators(Actions.settings, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
