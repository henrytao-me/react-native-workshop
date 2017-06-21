import React from 'react'
import {
  NativeModules,
  Platform,
  PropTypes,
  PureComponent,
  StatusBar,
  View
} from 'react-native-mdcore'

export default class StatusBarComponent extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  state = {
    statusBarHeight: 0
  }

  componentDidMount() {
    NativeModules.StatusBarManager.getHeight(({ height }) => this.setState({ statusBarHeight: height }))
  }

  render() {
    const { theme } = this.context
    const barStyle = 'light-content'
    const backgroundColor = Platform.OS === 'ios' ? theme.palette.primary : 'transparent'
    const height = Platform.OS === 'ios' ? this.state.statusBarHeight : 0
    return (
      <View style={{ backgroundColor, height }}>
        <StatusBar
          backgroundColor="black"
          barStyle={barStyle} />
      </View>
    )
  }
}
