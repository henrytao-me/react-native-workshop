import React from 'react'
import {
  Icon,
  Image,
  PropTypes,
  PureComponent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native-mdcore'

import { Activity } from '@models'

export default class ActivityItem extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    data: PropTypes.instanceOf(Activity),
    ratio: PropTypes.number,
    width: PropTypes.number,
    onPress: PropTypes.func
  }

  static defaultProps = {
    ratio: 1,
    onPress: () => { }
  }

  render() {
    if (this.props.width === 0 || !this.props.data) {
      return null
    }
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    return (
      <TouchableWithoutFeedback onPress={this._onPress}>
        <View style={[styles.container, this.props.style]}>
          <Image style={{ backgroundColor: theme.palette.backgroundDark }}
            height={this.props.width / this.props.ratio}
            source={this.props.data.image}
            width={this.props.width} />
          <View style={styles.header}>
            <Text numberOfLines={2} type="subhead1">
              {this.props.data.highlightTitle && <Text style={styles.headerHighLightTitle} type="subhead1">{this.props.data.highlightTitle}</Text>}
              {this.props.data.highlightTitle && <Text type="subhead1" value="  " />}
              {this.props.data.title && <Text type="subhead1">{this.props.data.title}</Text>}
            </Text>
          </View>
          <View style={styles.footer}>
            <Icon
              name="star"
              size={theme.icon.sizeSm} />
            <Icon
              name="star"
              size={theme.icon.sizeSm} />
            <Icon
              name="star"
              size={theme.icon.sizeSm} />
            <Icon
              name="star"
              size={theme.icon.sizeSm} />
            <Icon
              name="star"
              size={theme.icon.sizeSm} />
            <Text style={{ flex: 1, marginLeft: theme.layout.spacingXs }}
              type="caption"
              value="99 Reviews" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _onPress = () => {
    this.props.onPress(this.props)
  }
}

const Styles = StyleSheet.create((theme, { width }) => {
  const container = {
    width,
    paddingBottom: theme.layout.spacing
  }
  const footer = {
    flexDirection: 'row',
    alignItems: 'center'
  }
  const header = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: theme.layout.spacingSm,
    paddingBottom: theme.layout.spacingSm
  }
  const headerHighLightTitle = {
    fontWeight: 'bold'
  }
  return { container, footer, header, headerHighLightTitle }
})
