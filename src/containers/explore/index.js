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
          <Recommend />
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

  _onExperiencesPress = () => {
    this._goto(2)
  }

  _onHomesPress = () => {
    // this._goto(1)
    this.props.settingActions.setCode(new Date().toISOString())
  }

  _onTabItemSelected = ({ index }) => {
    this.refs.viewPager.setPage(index)
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
