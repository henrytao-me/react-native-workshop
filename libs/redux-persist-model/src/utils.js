export const isArray = (items) => {
  return Array.isArray(items)
}

export const isObject = (item) => {
  return (item && typeof item === 'object' && !isArray(item))
}
