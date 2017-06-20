import * as Utils from '../libs/utils'

export default class StyleSheet {

  static create(creator = (_theme, ..._args) => { }) {
    return new StyleSheet(Utils.isFunction(creator) ? creator : () => creator)
  }

  static _getThemeId(theme) {
    return theme ? theme.__id : null
  }

  constructor(creator) {
    this._creator = creator
    this._theme = null
    this._themeId = null
    this._args = []
    this._style = null
  }

  get(theme, ...args) {
    if (this._shouldRenewCache(theme, args)) {
      this._theme = theme
      this._themeId = this.constructor._getThemeId(theme)
      this._args = args
      this._style = this._creator(this._theme, ...this._args)
    }
    return this._style
  }

  _shouldRenewCache(theme = null, ...args) {
    if (theme !== this._theme || this.constructor._getThemeId(theme) !== this._themeId || !Utils.deepEqual(args, this._args)) {
      return true
    }
    return false
  }
}
