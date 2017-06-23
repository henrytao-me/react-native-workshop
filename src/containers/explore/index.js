import React from 'react'
import {
  PropTypes,
  PureComponent,
  TabItem,
  Tabs,
  View,
  ViewPager
} from 'react-native-mdcore'

import { StatusBar } from '@components'

import Experience from './experience'
import Home from './home'
import Recommend from './recommend'

const TABS = [{
  title: 'For you'
}, {
  title: 'Homes'
}, {
  title: 'Experiences'
}]

export default class Explore extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <Tabs ref="tabs"
          indicatorStyle={{ backgroundColor: theme.textColor.primary.primary, bottom: 1 }}
          onItemSelected={this._onTabItemSelected}>
          {TABS.map(this._renderTabItem)}
        </Tabs>
        <ViewPager ref="viewPager" style={{ flex: 1 }}
          onSelectedIndexChange={this._onViewPagerItemSelected}>
          <Recommend onSeeAllPress={this._onSeeAllPress} />
          <Home />
          <Experience />
        </ViewPager>
      </View>
    )
  }

  _goto = (index) => {
    this.refs.viewPager.setPage(index)
    this.refs.tabs.setItem(index)
  }

  _onTabItemSelected = ({ index }) => {
    this.refs.viewPager.setPage(index)
  }

  _onSeeAllPress = ({ tag }) => {
    switch (tag) {
      case 'experiences':
        this._goto(2)
        break
      case 'homes':
        this._goto(1)
        break
    }
  }

  _onViewPagerItemSelected = (index) => {
    this.refs.tabs.setItem(index)
  }

  _renderTabItem = (item, index) => {
    return (
      <TabItem key={index}
        title={item.title} />
    )
  }
}
