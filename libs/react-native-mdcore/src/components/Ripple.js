import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class Ripple extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    color: PropTypes.color,
    duration: PropTypes.number,
    opacity: PropTypes.opacity,
    size: PropTypes.number,
    onPress: PropTypes.func
  }

  static defaultProps = {
    opPress: () => { }
  }

  state = {
    ripples: []
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const Styles = StyleSheet.create((theme) => {
  return {}
})
