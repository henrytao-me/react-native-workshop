import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { Activity } from '@models'

import ActivityItem from './ActivityItem'

export default class ActivityVeriticalList extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.instanceOf(Activity)),
    imageRatio: PropTypes.number
  }

  state = {
    itemWidth: 0
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView style={{ paddingLeft: theme.layout.spacing, paddingRight: theme.layout.spacing }} onLayout={this._onLayoutChange}>
        {this.props.data && this.props.data.map(this._renderItem)}
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }

  _onLayoutChange = ({ nativeEvent: { layout: { width } } }) => {
    this.setState({ itemWidth: width })
  }

  _renderItem = (item, index) => {
    const { theme } = this.context
    return (
      <ActivityItem key={index} style={{ marginTop: theme.layout.spacing }}
        data={item}
        ratio={this.props.imageRatio}
        width={this.state.itemWidth} />
    )
  }
}
