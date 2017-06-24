import actionAsPromise from './actionAsPromise'

const options = {}

export default [
  actionAsPromise(options)
]

export const Injector = {
  inject: opts => Object.assign(options, opts || {})
}
