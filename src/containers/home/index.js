import React from 'react'
import {
  BottomNavigation, BottomNavigationItem,
  Button,
  Image,
  PureComponent,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native-mdcore'

export default class Main extends PureComponent {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ccaa33' }}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content" />
        <BottomNavigation>
          <BottomNavigationItem />
          <BottomNavigationItem />
          <BottomNavigationItem />
          <BottomNavigationItem />
        </BottomNavigation>
      </View>
    )
  }
}

