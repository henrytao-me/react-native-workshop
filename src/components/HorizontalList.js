import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native-mdcore'

import AttractionItem from './AttractionItem'

export default class HorizontalList extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    maxItemWidth: PropTypes.number,
    title: PropTypes.text.isRequired
  }

  static defaultProps = {
    maxItemWidth: 160
  }

  state = {
    itemWidth: 0
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={[styles.container, this.props.style]} onLayout={this._onLayoutChange}>
        <View style={styles.header}>
          <Text style={{ flex: 1 }}
            type="title"
            value={this.props.title} />
          <Text
            subType="secondary"
            type="body1"
            value="See all" />
        </View>
        <ScrollView
          horizontal={true}
          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{ width: theme.layout.spacing }} />
          <AttractionItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <AttractionItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <AttractionItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <AttractionItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <AttractionItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
        </ScrollView>
      </View>
    )
  }

  _onLayoutChange = ({ nativeEvent: { layout: { width } } }) => {
    const { theme } = this.context
    const { maxItemWidth } = this.props
    const spacing = theme.layout.spacing
    const availableWidth = width - spacing * 2
    const numberOfItems = availableWidth > maxItemWidth ? parseInt(availableWidth / maxItemWidth) : 1
    const itemWidth = parseInt(availableWidth / numberOfItems) - spacing
    this.setState({ itemWidth })
  }
}

const Styles = StyleSheet.create((theme) => {
  const body = {

  }
  const container = {
  }
  const header = {
    height: theme.list.singleLineTextOnlyHeight,
    paddingLeft: theme.layout.spacing,
    paddingRight: theme.layout.spacing,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return { body, container, header }
})
