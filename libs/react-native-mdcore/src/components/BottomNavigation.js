import React from 'react'
import { View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'

export default class BottomNavigation extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    backgroundColor: PropTypes.color,
    iconActiveColor: PropTypes.color,
    iconInactiveColor: PropTypes.color
  }

  render() {
    const { theme } = this.context
    return (
      <View style={{ flexDirection: 'row', minHeight: theme.bottomNavigation.minHeight }}>
        {this.props.children}
      </View>
    )
  }
}
