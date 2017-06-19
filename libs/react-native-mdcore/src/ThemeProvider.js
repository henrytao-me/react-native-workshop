import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'

import { Light as LightTheme } from './themes'
import Styles from './styles'

class ThemeProvider extends Component {

  static childContextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static propTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static defaultProps = {
    styles: Styles.resolve(LightTheme),
    theme: LightTheme
  }

  getChildContext() {
    const { styles, theme } = this.props
    return { styles, theme }
  }

  render() {
    const { styles, theme } = this.props
    
    return (
      <View style={[{ flex: 1, backgroundColor: theme.color.background }, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

export default ThemeProvider
