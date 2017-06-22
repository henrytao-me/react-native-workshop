import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class Tabs extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    backgroundColor: PropTypes.color,
    indicatorEnabled: PropTypes.bool,
    indicatorStyle: PropTypes.style,
    initialItem: PropTypes.number,
    onItemSelected: PropTypes.func
  }

  static defaultProps = {
    indicatorEnabled: true,
    initialItem: 0,
    onItemSelected: (_options = { index: 0 }) => { }
  }

  state = {
    index: undefined
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children && this.props.children.map(this._renderItem)}
      </View>
    )
  }

  setItem = (index) => {
    this.setState({ index })
  }

  _getIndex = () => {
    return this.state.index !== undefined ? this.state.index : this.props.initialItem
  }

  _onItemPress = (index) => {
    this.setState({ index })
    this.props.onItemSelected({ index })
  }

  _renderItem = (item, index) => {
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    const active = index === this._getIndex()
    item = item.props.active === active ? item : React.cloneElement(item, { active })
    return (
      <TouchableWithoutFeedback key={index} onPress={() => this._onItemPress(index)}>
        <View style={styles.item}>
          {this.props.indicatorEnabled && active && <View style={[styles.indicator, this.props.indicatorStyle]} />}
          {item}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const Styles = StyleSheet.create((theme, { backgroundColor }) => {
  const container = {
    backgroundColor: backgroundColor || theme.palette.primary,
    flexDirection: 'row'
  }
  const indicator = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.accent,
    height: theme.tab.indicatorHeight
  }
  const item = {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return { container, indicator, item }
})
