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

  static propTypes = {
    backgroundColor: PropTypes.color,
    barStyle: PropTypes.oneOf(['light-content', 'dark-content', 'default'])
  }

  state = {
    statusBarHeight: 0
  }

  componentDidMount() {
    NativeModules.StatusBarManager.getHeight(({ height }) => this.setState({ statusBarHeight: height }))
  }

  render() {
    const barStyle = this.props.barStyle || 'light-content'
    const backgroundColor = this._getBackgroundColor()
    const height = Platform.OS === 'ios' ? this.state.statusBarHeight : 0
    return (
      <View style={{ backgroundColor, height }}>
        <StatusBar
          backgroundColor="black"
          barStyle={barStyle} />
      </View>
    )
  }

  _getBackgroundColor = () => {
    const { theme } = this.context
    let backgroundColor = this.props.backgroundColor || (Platform.OS === 'ios' ? theme.palette.primary : 'transparent')
    backgroundColor = theme.palette[backgroundColor] || backgroundColor
    return backgroundColor
  }
}
