import React, { PureComponent } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'

class Main extends PureComponent {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)
