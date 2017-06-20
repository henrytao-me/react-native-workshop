import React from 'react'
import {
  AppRegistry,
  PureComponent,
  ThemeProvider
} from 'react-native-mdcore'

import Home from './containers/home'

class Main extends PureComponent {

  render() {
    return (
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)
