import { PureComponent } from 'react'

let rehyrated = false

const LISTENERS = []
const addListener = (listener) => {
  if (rehyrated) {
    listener()
  } else {
    LISTENERS.push(listener)
  }
}
const removeListener = (listener) => {
  const index = LISTENERS.indexOf(listener)
  if (index >= 0) {
    LISTENERS.slice(index, 1)
  }
}

export default class PersistModelProvider extends PureComponent {

  static rehydrated = () => {
    rehyrated = true
    LISTENERS.forEach(listener => listener())
    LISTENERS.splice(0, LISTENERS.length)
  }

  static reset = () => {
    rehyrated = false
    LISTENERS.splice(0, LISTENERS.length)
  }

  state = {
    ready: false
  }

  componentDidMount() {
    addListener(this._onReady)
  }

  componentWillUnmount() {
    removeListener(this._onReady)
  }

  render() {
    const { ready } = this.state
    if (!ready) {
      return null
    } else {
      return this.props.children
    }
  }

  _onReady = () => {
    this.setState({
      ready: true
    })
  }
}
