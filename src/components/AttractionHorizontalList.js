import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native-mdcore'

import { Attraction } from '@models'

import AttractionItem from './AttractionItem'

export default class AttractionHorizontalList extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.instanceOf(Attraction)),
    imageRatio: PropTypes.number,
    maxItemWidth: PropTypes.number,
    seeAllEnabled: PropTypes.bool,
    title: PropTypes.text.isRequired,
    onSeeAllPress: PropTypes.func
  }

  static defaultProps = {
    maxItemWidth: 160,
    seeAllEnabled: true,
    onSeeAllPress: () => { }
  }

  state = {
    itemWidth: 0
  }

  render() {
    if (!this.props.data || this.props.data.length === 0) {
      return null
    }
    const { theme } = this.context
    const styles = Styles.get(theme)
    return (
      <View style={[styles.container, this.props.style]} onLayout={this._onLayoutChange}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text
              type="title"
              value={this.props.title} />
          </View>
          {this.props.seeAllEnabled && (
            <TouchableOpacity onPress={this._onSeeAllPress}>
              <View style={styles.headerSeeAll}>
                <Text
                  subType="secondary"
                  type="body1"
                  value="See all" />
              </View>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView
          horizontal={true}
          removeClippedSubviews={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{ width: theme.layout.spacing }} />
          {this.props.data && this.props.data.map(this._renderItem)}
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

  _onSeeAllPress = () => {
    this.props.onSeeAllPress({ tag: this.props.tag })
  }

  _renderItem = (item, index) => {
    const { theme } = this.context
    return (
      <View key={index} style={{ flexDirection: 'row' }}>
        <AttractionItem
          data={item}
          ratio={this.props.imageRatio}
          width={this.state.itemWidth} />
        <View style={{ width: theme.layout.spacing }} />
      </View>
    )
  }
}

const Styles = StyleSheet.create((theme) => {
  const body = {
  }
  const container = {
  }
  const header = {
    height: theme.list.singleLineTextOnlyHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const headerSeeAll = {
    padding: theme.layout.spacing
  }
  const headerTitle = {
    flex: 1,
    paddingLeft: theme.layout.spacing,
    paddingRight: theme.layout.spacing
  }
  return { body, container, header, headerSeeAll, headerTitle }
})
