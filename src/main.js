import React from 'react'
import {
  AppRegistry,
  PureComponent,
  ThemeProvider
} from 'react-native-mdcore'

import { Screen as ScreenNavigator } from '@navigators'
import Theme from '@themes'

class Main extends PureComponent {

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <ScreenNavigator />
      </ThemeProvider>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)
