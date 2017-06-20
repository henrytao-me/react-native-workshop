import React from 'react'

import { createIconSet } from 'react-native-vector-icons'

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'

export default class Icon extends PureComponent {

  static DEFAULT_ICON_SET = 'MaterialIcons'

  static ICON_SETS = { Entypo, EvilIcons, FontAwesome, Foundation, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons, Zocial, SimpleLineIcons }

  static contextTypes = {
    theme: PropTypes.object
  }

  static propTypes = {
    color: PropTypes.color,
    name: PropTypes.string.isRequired,
    palette: PropTypes.palette,
    set: PropTypes.string,
    size: PropTypes.number,
    state: PropTypes.iconState
  }

  static defaultProps = {
    palette: 'background',
    state: 'active'
  }

  static addIconSet = (iconSet, glyphMap, fontFamily, fontFile) => {
    Icon.ICON_SETS[iconSet] = createIconSet(glyphMap, fontFamily, fontFile)
  }

  static setDefaultIconSet = (iconSet) => {
    Icon.DEFAULT_ICON_SET = iconSet
  }

  render() {
    const { theme } = this.context
    const { color, set = Icon.DEFAULT_ICON_SET, name, palette, size, state } = this.props
    const iconColor = color || theme.iconColor[state][palette]
    const iconSize = size || theme.icon.size
    const IconView = Icon.ICON_SETS[set]
    return (
      <IconView
        name={name}
        size={iconSize}
        color={iconColor}
        style={this.props.style} />
    )
  }
}
