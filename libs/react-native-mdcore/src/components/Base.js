import React, { Component, PropTypes } from 'react'
import { Button as _Button, View } from 'react-native'

class Base extends Component {

  static childContextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static contextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(['default', 'colored']),
    onPress: PropTypes.func.isRequired
  }

  getChildContext() {
    return {
      styles: this.props.styles || this.context.styles,
      theme: this.props.theme || this.context.theme
    }
  }

  render() {
    const { styles, theme } = this.context
    return (
      <View>
      </View>
    )
  }
}

export default Base
