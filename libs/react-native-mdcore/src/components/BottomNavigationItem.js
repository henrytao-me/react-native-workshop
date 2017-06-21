import React from 'react'
import { View } from 'react-native'

import Icon from './Icon'
import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'
import Text from './Text'

import * as Utils from '../libs/utils'

export default class BottomNavigationItem extends PureComponent {

  static propTypes = {
    active: PropTypes.bool,
    color: PropTypes.color,
    iconName: PropTypes.string,
    iconSet: PropTypes.string,
    palette: PropTypes.palette,
    title: PropTypes.text
  }

  static defaultProps = {
    active: false,
    palette: 'background'
  }

  render() {
    const styles = Styles.get()
    const color = this._getColor()
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.iconName && <Icon
          active={this.props.active}
          color={color}
          focus={this.props.active}
          name={this.props.iconName}
          palette={this.props.palette}
          set={this.props.iconSet} />}
        {this.props.title && <Text
          color={color}
          enable={this.props.active}
          palette={this.props.palette}
          subType="primary"
          type="caption">
          {this.props.title}
        </Text>}
      </View>
    )
  }

  _getColor = () => {
    if (Utils.isFunction(this.props.color)) {
      return this.props.color(this.props)
    }
    return this.props.color
  }
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
