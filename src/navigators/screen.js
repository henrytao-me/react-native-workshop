import React from 'react'
import {
  PropTypes,
  PureComponent
} from 'react-native-mdcore'
import { StackNavigator } from 'react-navigation'

import * as Containers from '@containers'

const ROUTERS = {
  experienceDetail: {
    path: 'detail/experience/:id',
    screen: Containers.ExperienceDetail
  },
  home: {
    screen: Containers.Home
  },
  homeDetail: {
    path: 'detail/home/:id',
    screen: Containers.HomeDetail
  }
}

const CARD_STYLE = {
  backgroundColor: 'transparent'
}

const Stack = StackNavigator(ROUTERS, {
  initialRouteName: 'home',
  cardStyle: CARD_STYLE,
  headerMode: 'none'
})

export default class Screen extends PureComponent {

  static contextTypes = {
    theme: PropTypes.object
  }

  render() {
    const { theme } = this.context
    CARD_STYLE.backgroundColor = theme.palette.background
    return (
      <Stack ref="navigator" style={{ flex: 1 }} />
    )
  }
}
