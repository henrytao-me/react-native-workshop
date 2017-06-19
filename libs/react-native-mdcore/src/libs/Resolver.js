import * as utils from './utils'

class BaseResolver {

  constructor(defaultKey, valuesMap) {
    this._defaultKey = defaultKey
    this._valuesMap = valuesMap
    this._key = null
    this._cache = {}
    this._apply()
  }

  clone() {
    return create(this._defaultKey, this._valuesMap)
  }

  resolve(key) {
    this._key = key
    this._apply()
    return this
  }

  _apply() {
    this._cache = utils.merge({}, this._valuesMap[this._defaultKey], this._valuesMap[this._key] || {})
  }
}

const create = (defaultKey, valuesMap) => {
  class Resolver extends BaseResolver { }
  const defaultValues = valuesMap[defaultKey] || {}
  Object.keys(defaultValues).map(key => {
    Object.defineProperty(Resolver.prototype, key, {
      get: function () {
        return this._cache[key]
      }
    })
  })
  return new Resolver(defaultKey, valuesMap)
}

export default { create }
