import * as Utils from './utils'

export default class Resolver {

  static create(defaultValue, values) {
    return new Resolver(Object.assign({}, defaultValue), Object.assign({}, values))
  }

  constructor(defaultValue = {}, values = {}) {
    this._defaultValue = defaultValue
    this._values = values
    // Ex: [{ group: 1, key: 'land', regex: ... }]
    this._regexMap = Object
      .keys(values)
      .map(key => {
        const keys = key.split('-').sort()
        const regex = new RegExp(`.*-${keys.join('-.*-')}-.*`)
        return { group: keys.length, key, regex }
      })
      .sort((a, b) => a.group - b.group)
  }

  clone() {
    return Resolver.create(this._defaultValue, this._valuesMap)
  }

  extend(defaultValue, values) {
    return Resolver.create(Utils.merge({}, this._defaultValue, defaultValue), Utils.merge({}, this._values, values))
  }

  getKeys() {
    return Object.keys(this._values)
  }

  getOrderedKeys() {
    return this.getKeys().sort()
  }

  resolve(keys = []) {
    keys = Utils.isArray(keys) ? keys : keys.split('-')
    const requestKey = `-${keys.filter(key => !!key).sort().join('-')}-`
    return this._regexMap.reduce((acc, { key, regex }) => {
      if (requestKey && regex.test(requestKey)) {
        Utils.merge(acc, this._values[key])
      }
      return acc
    }, Utils.merge({}, this._defaultValue))
  }
}
