import React, { PureComponent } from 'react'
import { AppState, I18nManager, PixelRatio, View } from 'react-native'

import { PropTypes } from '../components'
import Theme from '../theme'
import * as Utils from '../libs/utils'

const LAND = 'land'
const LDLTR = 'ldltr'
const LDRTL = 'ldrtl'
const PORT = 'port'

export default class ThemeProvider extends PureComponent {

  static childContextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    layoutDirection: PropTypes.string,
    locale: PropTypes.string,
    orientation: PropTypes.string,
    theme: PropTypes.instanceOf(Theme.constructor),
    smallestWidth: PropTypes.string
  }

  static defaultProps = {
    theme: Theme
  }

  state = {
    layoutDirection: undefined,
    locale: undefined,
    orientation: undefined,
    smallestWidth: undefined
  }

  _theme = {}

  componentDidMount() {
    AppState.addEventListener('change', this._onAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._onAppStateChange)
  }

  getChildContext() {
    return { theme: this._theme }
  }

  render() {
    const theme = this._theme
    theme.__id = (theme.__id || new Date().getTime()) + 1
    Object.assign(theme, this.props.theme.resolve(Object.keys(this.state).map(key => this.props[key] || this.state[key])))
    return (
      <View style={[{ flex: 1, backgroundColor: theme.palette.background }, this.props.style]} onLayout={this._onLayout}>
        {this.props.children}
      </View>
    )
  }

  _onAppStateChange = () => {
    if (I18nManager.isRTL && this.state.layoutDirection !== LDRTL) {
      this.setState({ layoutDirection: LDRTL })
    } else if (!I18nManager.isRTL && this.state.layoutDirection !== LDLTR) {
      this.setState({ layoutDirection: LDLTR })
    }
  }

  _onLayout = ({ nativeEvent: { layout: { width, height } } }) => {
    const ratio = PixelRatio.get()
    const widthInDp = width / ratio
    const keys = this.props.theme.getOrderedKeys()
    const newState = Object.assign({}, this.state, {
      smallestWidth: undefined
    })
    keys.forEach(key => {
      const smallestWidth = Utils.idx(key, key => parseInt(/^sw([0-9]+)$/.exec(key)[1]))
      if (smallestWidth && widthInDp >= smallestWidth) {
        newState.smallestWidth = key
      }
    })
    if (width > height && this.state.orientation !== LAND) {
      newState.orientation = LAND
    } else if (width <= height && this.state.orientation !== PORT) {
      newState.orientation = PORT
    }
    this.setState(newState)
  }
}
