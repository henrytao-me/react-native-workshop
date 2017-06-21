import React from 'react'
import { View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import RNButton from './internal/Button'

export default class Button extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    palette: PropTypes.palette,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'borderless']),
    onPress: PropTypes.func.isRequired
  }

  static defaultProps = {
    palette: 'background',
    type: 'default'
  }

  render() {
    const { theme } = this.context
    const fontFamily = theme.fontFamily.medium
    let { palette, type } = this.props
    let backgroundColor, textColor, textColorBorderless
    switch (palette) {
      case 'primary':
        backgroundColor = theme.palette.primary
        textColor = theme.textColor.primary.primary
        textColorBorderless = theme.palette.primary
        break
      case 'accent':
        backgroundColor = theme.palette.accent
        textColor = theme.textColor.primary.accent
        textColorBorderless = theme.palette.accent
        break
      case 'warn':
        backgroundColor = theme.palette.warn
        textColor = theme.textColor.primary.warn
        textColorBorderless = theme.palette.warn
        break
      default:
        backgroundColor = theme.palette.background
        textColor = theme.textColor.primary.background
        textColorBorderless = theme.textColor.primary.background
        break
    }
    return (
      <View minWidth={theme.button.minWidth}>
        <RNButton
          buttonStyle={{
            elevation: type === 'borderless' ? 0 : 2,
            backgroundColor: type === 'borderless' ? theme.palette.transparent : backgroundColor
          }}
          textStyle={{
            color: type === 'borderless' ? textColorBorderless : textColor,
            fontFamily: fontFamily,
            fontWeight: 'normal'
          }}
          title={this.props.title}
          onPress={this.props.onPress} />
      </View>
    )
  }
}
