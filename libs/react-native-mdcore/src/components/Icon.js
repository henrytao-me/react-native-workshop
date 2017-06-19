import React, { PureComponent, PropTypes } from 'react'

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

class Icon extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    iconSet: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

  static defaultProps = {
    iconSet: 'MaterialIcons',
    size: 24
  }

  render() {
    const Icon = this._getIcon()
    const { color, name, size, style } = this.props
    const iconColor = color || '#cc33aa'
    const iconSize = size

    return (
      <Icon
        name={name}
        size={iconSize}
        color={iconColor}
        style={style} />
    )
  }

  _getIcon = () => {
    switch (this.props.iconSet) {
      case 'Entypo':
        return Entypo
      case 'EvilIcons':
        return EvilIcons
      case 'FontAwesome':
        return FontAwesome
      case 'Foundation':
        return Foundation
      case 'Ionicons':
        return Ionicons
      case 'MaterialIcons':
        return MaterialIcons
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons
      case 'Octicons':
        return Octicons
      case 'Zocial':
        return Zocial
      case 'SimpleLineIcons':
        return SimpleLineIcons
      default:
        return MaterialIcons
    }
  }
}

export default Icon
