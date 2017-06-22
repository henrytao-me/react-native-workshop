import React from 'react'
import {
  Button,
  PropTypes,
  PureComponent,
  TabItem,
  Tabs,
  Text,
  View,
  ViewPager
} from 'react-native-mdcore'

import * as actions from '@actions'
import { StatusBar } from '@components'
import { bindActionCreators, connect } from '@store'

const TABS = [{
  title: 'For you'
}, {
  title: 'Homes'
}, {
  title: 'Experiences'
}]

class Explore extends PureComponent {

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
          <View style={{ alignItems: 'center' }}>
            <View style={{ height: 16 }} />
            <Button title="experiences" onPress={this._onExperiencesPress} />
            <View style={{ height: 16 }} />
            <Button title="homes" onPress={this._onHomesPress} />
          </View>
          <View>
            <Text>Homes</Text>
          </View>
          <View>
            <Text>Experiences</Text>
          </View>
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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingActions: bindActionCreators(actions.settings, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
