import React from 'react'
import {
  PropTypes,
  PureComponent,
  TabItem,
  Tabs,
  Text,
  View,
  ViewPager
} from 'react-native-mdcore'

import { StatusBar } from '@components'

const TABS = [{
  title: 'For you'
}, {
  title: 'Homes'
}, {
  title: 'Experiences'
}, {
  title: 'Places'
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
          <View>
            <Text>For you</Text>
          </View>
          <View>
            <Text>Homes</Text>
          </View>
          <View>
            <Text>Experiences</Text>
          </View>
          <View>
            <Text>Places</Text>
          </View>
        </ViewPager>
      </View>
    )
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
