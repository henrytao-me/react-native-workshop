const mergeAPair = (target, source) => {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} })
        }
        mergeAPair(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    });
  }
  return target
}

export const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
}

export const merge = (...args) => {
  target = args[0]
  args
    .filter((value, key) => key > 0)
    .map(value => mergeAPair(target, value))
  return target
}
