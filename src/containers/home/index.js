import React from 'react'
import {
  BottomNavigation, BottomNavigationItem,
  Divider,
  PropTypes,
  PureComponent,
  View
} from 'react-native-mdcore'

import { StatusBar, ViewGroup } from '@components'
import { Explore, Saved } from '@containers'

const BOTTOM_NAVIGATION_ITEMS = [{
  icon: 'search',
  title: 'EXPLORE'
}, {
  icon: 'favorite-border',
  title: 'SAVED'
}, {
  icon: 'adjust',
  title: 'TRIPS'
}, {
  icon: 'inbox',
  title: 'INBOX'
}, {
  icon: 'person-outline',
  title: 'PROFILE'
}]

export default class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <ViewGroup ref="screen">
          <Explore />
          <Saved />
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

