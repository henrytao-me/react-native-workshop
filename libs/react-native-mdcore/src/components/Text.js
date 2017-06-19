import React, { Component, PropTypes } from 'react'
import { Text as RNText, View } from 'react-native'

class Text extends Component {

  static contextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static propTypes = {
    palette: PropTypes.oneOf(['primary', 'accent', 'warn', 'background']),
    subType: PropTypes.oneOf(['primary', 'secondary', 'hint']),
    type: PropTypes.oneOf(['button', 'caption', 'body1', 'body2', 'subhead1', 'subhead2', 'title', 'headline', 'display1', 'display2', 'display3', 'display4'])
  }

  static defaultProps = {
    palette: 'background',
    subType: 'primary',
    type: 'body1'
  }

  render() {
    const { styles, theme } = this.context
    const { palette, subType, type } = this.props
    return (
      <RNText style={[styles.text[type], { color: theme.textColor[subType][type] }, this.props.style]}>
        {this.props.children}
      </RNText>
    )
  }
}

export default Text
