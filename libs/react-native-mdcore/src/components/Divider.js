import React from 'react'
import { View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class Divider extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    largePadding: PropTypes.bool
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    return (
      <View style={[styles.container, this.props.style]} />
    )
  }
}

const Styles = StyleSheet.create((theme, opts = {}) => {
  let { largePadding } = opts
  const container = {
    backgroundColor: theme.divider.color,
    height: theme.divider.size,
    marginLeft: largePadding ? (2 * theme.list.paddingLeft + theme.list.avatarSize) : 0
  }
  return { container }
})
