import React from 'react'
import {
  Icon,
  Image,
  PropTypes,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native-mdcore'

import { Activity } from '@models'

const onPress = (props) => () => {
  props.onPress(props)
}

const ActivityItem = (props, { theme }) => {
  if (props.width === 0 || !props.data) {
    return null
  }
  const styles = Styles.get(theme, props)
  return (
    <TouchableWithoutFeedback onPress={onPress(props)}>
      <View style={[styles.container, props.style]}>
        <Image style={{ backgroundColor: theme.palette.backgroundDark }}
          height={props.width / props.ratio}
          source={props.data.image}
          width={props.width} />
        <View style={styles.header}>
          <Text numberOfLines={2} type="subhead1">
            {props.data.highlightTitle && <Text style={styles.headerHighLightTitle} type="subhead1">{props.data.highlightTitle}</Text>}
            {props.data.highlightTitle && <Text type="subhead1" value=" - " />}
            {props.data.title && <Text type="subhead1">{props.data.title}</Text>}
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

ActivityItem.contextTypes = {
  theme: PropTypes.any
}

ActivityItem.propTypes = {
  data: PropTypes.instanceOf(Activity),
  ratio: PropTypes.number,
  width: PropTypes.number,
  onPress: PropTypes.func
}

ActivityItem.defaultProps = {
  ratio: 1,
  onPress: () => { }
}

export default ActivityItem

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
