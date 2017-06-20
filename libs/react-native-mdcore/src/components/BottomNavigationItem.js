import React from 'react'
import { View } from 'react-native'

import Icon from './Icon'
import PureComponent from './PureComponent'

export default class BottomNavigationItem extends PureComponent {

  render() {
    return (
      <View>
        <Icon name="bookmark" />
      </View>
    )
  }
}
