import React from 'react'
import { View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class Card extends PureComponent {

  static contextTypes = {
    theme: PropTypes.object
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

const Styles = StyleSheet.create((theme) => {
  const container = {
    borderRadius: 2,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  }
  return { container }
})
