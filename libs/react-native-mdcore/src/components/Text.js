import React from 'react'
import { Text as RNText } from 'react-native'

import PropTypes from './PropTypes'
import PureComponent from './PureComponent'
import StyleSheet from './StyleSheet'

export default class Text extends PureComponent {

  static contextTypes = {
    theme: PropTypes.object
  }

  static propTypes = {
    ellipsizeMode: PropTypes.ellipsizeMode,
    numberOfLines: PropTypes.number,
    palette: PropTypes.palette,
    subType: PropTypes.textSubType,
    type: PropTypes.textType,
    value: PropTypes.text
  }

  static defaultProps = {
    ellipsizeMode: 'tail',
    palette: 'background',
    subType: 'primary',
    type: 'body1'
  }

  render() {
    const { theme } = this.context
    const styles = Styles.get(theme)
    const { ellipsizeMode, palette, subType, type } = this.props
    let numberOfLines = undefined
    switch (type) {
      case 'button':
      case 'caption':
      case 'title':
      case 'display3':
      case 'display4':
        numberOfLines = 1
        break
      default:
        numberOfLines = undefined
        break
    }
    numberOfLines = this.props.numberOfLines || numberOfLines
    numberOfLines = numberOfLines === 0 ? undefined : numberOfLines
    return (
      <RNText style={[styles[type], { color: theme.textColor[subType][palette] }, this.props.style]} ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines}>
        {this.props.children || this.props.value}
      </RNText>
    )
  }
}

const Styles = StyleSheet.create((theme) => {
  return {
    button: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.button,
      lineHeight: theme.lineHeight.button
    },
    caption: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.caption,
      lineHeight: theme.lineHeight.caption
    },
    body1: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.body1,
      lineHeight: theme.lineHeight.body1
    },
    body2: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.body2,
      lineHeight: theme.lineHeight.body2
    },
    subhead1: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.subhead1,
      lineHeight: theme.lineHeight.subhead1
    },
    subhead2: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.subhead2,
      lineHeight: theme.lineHeight.subhead2
    },
    title: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSize.title,
      lineHeight: theme.lineHeight.title
    },
    headline: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.headline,
      lineHeight: theme.lineHeight.headline
    },
    display1: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display1,
      lineHeight: theme.lineHeight.display1
    },
    display2: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display2,
      lineHeight: theme.lineHeight.display2
    },
    display3: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.display3,
      lineHeight: theme.lineHeight.display3
    },
    display4: {
      fontFamily: theme.fontFamily.light,
      fontSize: theme.fontSize.display4,
      lineHeight: theme.lineHeight.display4
    }
  }
})
