import React from 'react'
import {
  Icon,
  PropTypes,
  PureComponent,
  StyleSheet,
  Text,
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
  }

  static defaultProps = {
    ratio: 1
  }

  render() {
    if (this.props.width === 0 || !this.props.data) {
      return null
    }
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ height: this.props.width / this.props.ratio, backgroundColor: '#ccc' }}></View>
        <View style={styles.header}>
          <Text numberOfLines={2}>
            {this.props.data.highlightTitle && <Text style={styles.headerHighLightTitle} type="subhead1">{this.props.data.highlightTitle}</Text>}
            {this.props.data.highlightTitle && <Text value="  " />}
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
    )
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
    marginTop: theme.layout.spacingSm,
    marginBottom: theme.layout.spacingSm
  }
  const headerHighLightTitle = {
    fontWeight: 'bold'
  }
  return { container, footer, header, headerHighLightTitle }
})
