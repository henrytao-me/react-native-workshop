import React from 'react'
import {
  BottomNavigation, BottomNavigationItem,
  Divider,
  PropTypes,
  PureComponent,
  View
} from 'react-native-mdcore'

import { ViewGroup } from '@components'
import { Explore, Inbox, Profile, Saved, Trips } from '@containers'

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

export default class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
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

