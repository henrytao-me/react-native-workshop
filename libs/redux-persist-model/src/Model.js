import { Record } from 'immutable'

import * as Utils from './utils'

const create = (NAME = null, FIELDS) => {
  // Convert FIELDS array to map with default value as undefined
  FIELDS = Utils.isArray(FIELDS) ? FIELDS.reduce((acc, field) => {
    acc[field] = undefined
    return acc
  }, {}) : FIELDS
  if (!NAME || !FIELDS) {
    throw new Error('IllegalArgumemntsException: <NAME> and <FIELDS> are required for redux-persist-model')
  }

  const Base = Record({
    __MODEL__: NAME,
    ...FIELDS
  }, NAME)

  class Model extends Base {

    static __MODEL__ = NAME

    static NAME = NAME

    static FIELDS = FIELDS

    clone() {
      const zClass = this.constructor
      return new zClass(this.toJS())
    }

    get(key, defaultValue = FIELDS[key]) {
      let value = super.get(key)
      value = value === undefined || value === null ? defaultValue : value
      return value
    }
  }
  return Model
}

const isModel = (model) => {
  return model instanceof Record && !!model.get('__MODEL__')
}

const isModelClass = (mClass) => {
  return !!mClass && !!mClass.__MODEL__
}

const isModelData = (data) => {
  return !isModel(data) && Utils.isObject(data) && !!data.__MODEL__
}

export default { create, isModel, isModelClass, isModelData }
