import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

import RNButton from './internal/Button'

class Button extends Component {

  static contextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static propTypes = {
    palette: PropTypes.oneOf(['primary', 'accent', 'warn', 'background']),
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'borderless']),
    onPress: PropTypes.func.isRequired
  }

  static defaultProps = {
    type: 'default'
  }

  render() {
    const { styles, theme } = this.context
    let { type } = this.props
    let palette = type === 'borderless' ? 'primary' : 'background'
    let color, textColor = theme.textColor.primary.background
    switch (palette) {
      case 'primary':
        color = theme.color.primary
        textColor = theme.textColor.primary.primary
        break;
      case 'accent':
        color = theme.color.accent
        textColor = theme.textColor.primary.accent
        break;
      case 'warn':
        color = theme.color.warn
        textColor = theme.textColor.primary.warn
        break;
      default:
        color = theme.color.backgroundDark
        textColor = theme.textColor.primary.background
        break;
    }
    return (
      <View minWidth={theme.layout.buttonMinWidth}>
        <RNButton
          buttonStyles={{
            elevation: type === 'borderless' ? 0 : 2,
            backgroundColor: type === 'borderless' ? 'transparent' : color
          }}
          textStyles={{
            color: type === 'borderless' ? color : textColor
          }}
          title={this.props.title}
          onPress={this.props.onPress} />
      </View>
    )
  }
}

export default Button
