import { createTransform } from 'redux-persist'

import Model from './Model'
import * as Utils from './utils'

// transform state coming from redux on its way to being serialized and stored
const serialize = (models, inboundState) => {
  if (Model.isModel(inboundState) && !!models[inboundState.__MODEL__]) {
    inboundState = inboundState.toJS()
  } else if (Utils.isArray(inboundState)) {
    inboundState = inboundState.map(state => serialize(models, state))
  } else if (Utils.isObject(inboundState)) {
    inboundState = Object.keys(inboundState).reduce((acc, key) => {
      acc[key] = serialize(models, inboundState[key])
      return acc
    }, {})
  }
  return inboundState
}

// transform state coming from storage, on its way to be rehydrated into redux
const deserialize = (models, outboundState) => {
  if (Model.isModelData(outboundState) && !!models[outboundState.__MODEL__]) {
    const ModelClass = models[outboundState.__MODEL__]
    outboundState = new ModelClass(outboundState)
  } else if (Utils.isArray(outboundState)) {
    outboundState = outboundState.map(state => deserialize(models, state))
  } else if (Utils.isObject(outboundState)) {
    outboundState = Object.keys(outboundState).reduce((acc, key) => {
      acc[key] = deserialize(models, outboundState[key])
      return acc
    }, {})
  }
  return outboundState
}

export default (models = []) => {
  // verify models
  models = Utils.isObject(models) ? Object.values(models) : models
  models.forEach(mClass => {
    if (!Model.isModelClass(mClass)) {
      throw new Error('CreateModelTransform error: Invalid model class')
    }
  })

  // convert models array to map
  models = models.reduce((acc, model) => {
    acc[model.__MODEL__] = model
    return acc
  }, {})

  // create redux-persist transform
  return createTransform(
    (inboundState, key) => {
      const state = serialize(models, inboundState, key)
      // console.log('ssssssssssssss', key, state, inboundState)
      return state
    },
    (outboundState, key) => {
      const state = deserialize(models, outboundState, key)
      // console.log('dddddddddddddd', key, state, outboundState)
      return state
    }
  )
}
