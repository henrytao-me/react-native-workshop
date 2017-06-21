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

import * as Utils from '../libs/utils'

export default class Icon extends PureComponent {

  static DEFAULT_ICON_SET = 'MaterialIcons'

  static ICON_SETS = { Entypo, EvilIcons, FontAwesome, Foundation, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons, Zocial, SimpleLineIcons }

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    active: PropTypes.bool,
    color: PropTypes.color,
    focus: PropTypes.bool,
    name: PropTypes.string.isRequired,
    palette: PropTypes.palette,
    set: PropTypes.string,
    size: PropTypes.number
  }

  static defaultProps = {
    active: true,
    focus: false,
    palette: 'background'
  }

  static addIconSet = (iconSet, glyphMap, fontFamily, fontFile) => {
    Icon.ICON_SETS[iconSet] = createIconSet(glyphMap, fontFamily, fontFile)
  }

  static setDefaultIconSet = (iconSet) => {
    Icon.DEFAULT_ICON_SET = iconSet
  }

  render() {
    const { theme } = this.context
    const color = this._getColor()
    const size = this.props.size || theme.icon.size
    const IconView = Icon.ICON_SETS[this.props.set || Icon.DEFAULT_ICON_SET]
    return (
      <IconView style={this.props.style}
        color={color}
        name={this.props.name}
        size={size} />
    )
  }

  _getColor = () => {
    if (Utils.isFunction(this.props.color)) {
      return this.props.color(this.props)
    }
    const { theme } = this.context
    const state = this.props.focus ? 'focused' : (this.props.active ? 'active' : 'inactive')
    return this.props.color || theme.iconColor[state][this.props.palette]
  }
}
