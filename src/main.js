import React from 'react'
import {
  AppRegistry,
  PureComponent,
  ThemeProvider
} from 'react-native-mdcore'

import Home from '@containers/home'

import Theme from '@themes'

class Main extends PureComponent {

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)
