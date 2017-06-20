import { isImmutable } from './immutable'

export const deepEqual = (a, b, comparator = _comparator) => {
  if (isImmutable(a) && isImmutable(b)) {
    return a === b
  }
  if (a instanceof Date && b instanceof Date) {
    return _comparator(a, b)
  }
  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], comparator)) {
        return false
      }
    }
    return true
  }
  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length || aKeys.sort().join(',') !== bKeys.sort().join(',')) {
      return false
    }
    const keys = aKeys
    for (let i = 0; i < keys.length; i++) {
      if (!deepEqual(a[keys[i]], b[keys[i]], comparator)) {
        return false
      }
    }
    return true
  }
  return comparator(a, b)
}

export const flattenObject = (obj, prefix) => {
  if (!isObject(obj)) {
    return {}
  }
  prefix = prefix ? `${prefix}.` : ''
  return Object.keys(obj).reduce((acc, key) => {
    let value = obj[key]
    if (!isObject(value)) {
      acc[prefix + key] = isArray(value) ? JSON.stringify(value) : value
    } else {
      let children = flattenObject(value, key)
      Object.keys(children).forEach(k => {
        acc[prefix + k] = children[k]
      })
    }
    return acc
  }, {})
}

export const hook = (target, action, onError = (_error, _index) => { }, callback = (_next, _resolve, _reject) => _next()) => {
  callback = isObject(callback) ? callback : { retry: callback }
  action = action.bind(target)
  onError = onError.bind(target)
  const callbacks = Object.keys(callback).reduce((acc, key) => {
    acc[key] = callback[key].bind(target)
    return acc
  }, {})
  const options = {
    args: [],
    finished: false,
    index: 0,
    reject: null,
    resolve: null
  }
  const fn = (...args) => {
    options.args = args
    options.finished = false
    options.index = 0
    return new Promise((resolve, reject) => {
      options.reject = reject
      options.resolve = resolve
      next()
    })
  }
  const next = (() => {
    try {
      const res = action(...options.args)
      if (res instanceof Promise) {
        return res
          .then(data => resolve(data))
          .catch(error => onError(error, options.index++))
      } else {
        resolve(res)
      }
    } catch (error) {
      onError(error, options.index++)
    }
  }).bind(target)
  const reject = ((error) => {
    const { finished, reject } = options
    if (!finished && !!reject) {
      options.finished = true
      reject(error)
    }
  }).bind(target)
  const resolve = ((data) => {
    const { finished, resolve } = options
    if (!finished && !!resolve) {
      options.finished = true
      resolve(data)
    }
  }).bind(target)
  Object.keys(callbacks).forEach(key => fn[key] = () => {
    callbacks[key](next, resolve, reject)
  })
  return fn
}

export const idx = (obj, callback = (_obj) => { }) => {
  try {
    return callback(obj)
  } catch (ignore) {
  }
  return undefined
}

export const isArray = (items) => {
  return Array.isArray(items)
}

export const isFunction = (obj) => {
  return obj instanceof Function
}

export const isObject = (item) => {
  return (item && typeof item === 'object' && !isArray(item))
}

export const merge = (...args) => {
  const target = args[0]
  args.filter((value, key) => key > 0).forEach(value => _mergeAPair(target, value))
  return target
}

export const shallowEqual = (a, b, comparator = _comparator, excludes = []) => {
  if (isImmutable(a) && isImmutable(b)) {
    return a === b
  }
  if (a instanceof Date && b instanceof Date) {
    return comparator(a, b)
  }
  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false
    }
    for (let i = 0; i < a.length; i++) {
      if (!comparator(a[i], b[i])) {
        return false
      }
    }
    return true
  }
  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length || aKeys.sort().join(',') !== bKeys.sort().join(',')) {
      return false
    }
    const keys = aKeys.filter(key => excludes.indexOf(key) < 0)
    for (let i = 0; i < keys.length; i++) {
      if (!comparator(a[keys[i]], b[keys[i]])) {
        return false
      }
    }
    return true
  }
  return comparator(a, b)
}

const _comparator = (a, b) => {
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime()
  }
  if (a instanceof Function && b instanceof Function) {
    return true
  }
  return a === b
}

const _mergeAPair = (target, source) => {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        _mergeAPair(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    })
  }
  return target
}
