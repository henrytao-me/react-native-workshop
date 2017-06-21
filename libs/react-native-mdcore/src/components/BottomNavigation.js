import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class BottomNavigation extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    backgroundColor: PropTypes.color,
    initialItem: PropTypes.number,
    onItemSelected: PropTypes.func
  }

  static defaultProps = {
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

  _getIndex = () => {
    return this.state.index !== undefined ? this.state.index : this.props.initialItem
  }

  _onItemPress = (index) => {
    this.setState({ index })
    this.props.onItemSelected({ index })
  }

  _renderItem = (item, index) => {
    const active = index === this._getIndex()
    item = item.props.active === active ? item : React.cloneElement(item, { active })
    return (
      <TouchableWithoutFeedback key={index} onPress={() => this._onItemPress(index)}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {item}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const Styles = StyleSheet.create((theme, { backgroundColor }) => {
  const container = {
    backgroundColor,
    flexDirection: 'row',
    height: theme.bottomNavigation.minHeight
  }
  return { container }
})
