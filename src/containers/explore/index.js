import React from 'react'
import {
  PureComponent,
  Text,
  View
} from 'react-native-mdcore'

import { StatusBar } from '@components'

export default class Explore extends PureComponent {

  render() {
    return (
      <View>
        <StatusBar />
        <Text>Explore</Text>
      </View>
    )
  }
}
