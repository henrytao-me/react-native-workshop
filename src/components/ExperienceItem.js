import React from 'react'
import {
  Icon,
  PropTypes,
  PureComponent,
  StyleSheet,
  Text,
  View
} from 'react-native-mdcore'

export default class ExperienceItem extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    width: PropTypes.number,
  }

  render() {
    if (this.props.width === 0) {
      return null
    }
    const { theme } = this.context
    const styles = Styles.get(theme, this.props)
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{ height: 240, backgroundColor: '#ccc' }}></View>
        <View style={styles.header}>
          <Text numberOfLines={2}>
            <Text style={{ fontWeight: 'bold' }}
              type="subhead1"
              value="$120" />
            <Text value="  " />
            <Text
              type="subhead1"
              value="Catch fresh crab out of the Pacific" />
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
            value="47 Reviews" />
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create((theme, { width }) => {
  const container = {
    width
  }
  const footer = {
    flexDirection: 'row',
    alignItems: 'center'
  }
  const header = {
    height: theme.list.singleLineAvatarWithTextHeight,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.layout.spacingXs,
    marginBottom: theme.layout.spacingXs
  }
  return { container, footer, header }
})
