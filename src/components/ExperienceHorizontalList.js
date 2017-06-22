import React from 'react'
import {
  PixelRatio,
  PropTypes,
  PureComponent,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native-mdcore'

import ExperienceItem from './ExperienceItem'

let CACHE_ITEM_WIDTH = 0
const MAX_ITEM_WIDTH = 160

export default class ExperienceHorizontalList extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    title: PropTypes.text.isRequired
  }

  state = {
    itemWidth: CACHE_ITEM_WIDTH
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
          <ExperienceItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <ExperienceItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <ExperienceItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <ExperienceItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
          <ExperienceItem width={this.state.itemWidth} />
          <View style={{ width: theme.layout.spacing }} />
        </ScrollView>
      </View>
    )
  }

  _onLayoutChange = ({ nativeEvent: { layout: { width } } }) => {
    const { theme } = this.context
    const spacing = theme.layout.spacing
    const availableWidth = width - spacing * 2
    const itemWidth = parseInt(availableWidth / parseInt(availableWidth / MAX_ITEM_WIDTH)) - spacing
    if (itemWidth !== CACHE_ITEM_WIDTH) {
      CACHE_ITEM_WIDTH = itemWidth
      this.setState({ itemWidth })
    }
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
