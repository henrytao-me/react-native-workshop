import React from 'react'
import {
  BottomNavigation, BottomNavigationItem,
  Divider,
  InteractionManager,
  PropTypes,
  PureComponent,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { ViewGroup } from '@components'
import { Explore, Inbox, Profile, Saved, Trips } from '@containers'
import { bindActionCreators, connect } from '@store'

const BOTTOM_NAVIGATION_ITEMS = [{
  icon: 'search',
  title: 'Explore'
}, {
  icon: 'favorite-border',
  title: 'Saved'
}, {
  icon: 'adjust',
  title: 'Trips'
}, {
  icon: 'inbox',
  title: 'Inbox'
}, {
  icon: 'person-outline',
  title: 'Profile'
}]

class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  componentDidMount() {
    const { syncActions } = this.props
    InteractionManager.runAfterInteractions(() => Promise.all([
      syncActions.syncExperiences(),
      syncActions.syncListings()
    ]))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViewGroup ref="screen">
          <Explore />
          <Saved />
          <Trips />
          <Inbox />
          <Profile />
        </ViewGroup>
        <Divider />
        <BottomNavigation onItemSelected={this._onBottomNavigationItemSelected}>
          {BOTTOM_NAVIGATION_ITEMS.map(this._renderBottomNavigationItem)}
        </BottomNavigation>
      </View>
    )
  }

  _onSetColor = ({ active }) => {
    const { theme } = this.context
    return active ? theme.palette.accent : undefined
  }

  _onBottomNavigationItemSelected = ({ index }) => {
    this.refs.screen.show(index)
  }

  _renderBottomNavigationItem = (item, index) => {
    return (
      <BottomNavigationItem key={index}
        color={this._onSetColor}
        iconName={item.icon}
        title={item.title} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    syncActions: bindActionCreators(Actions.sync, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home)
