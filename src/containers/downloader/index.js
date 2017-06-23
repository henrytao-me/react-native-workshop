import {
  PropTypes,
  PureComponent,
  ThemeUtils as Utils
} from 'react-native-mdcore'
import CodePush from 'react-native-code-push/CodePush'

export default class Downloader extends PureComponent {

  static contextTypes = {
    theme: PropTypes.object
  }

  componentDidMount() {
    CodePush.notifyAppReady().catch(() => { }).then(this._onAppReady)
  }

  render() {
    return this.props.children
  }

  _getUpdateConfig = (update) => {
    const { description } = update
    try {
      const config = JSON.parse(description)
      const keys = ['descriptionPrefix', 'mandatoryContinueButtonLabel', 'mandatoryUpdateMessage', 'optionalIgnoreButtonLabel', 'optionalInstallButtonLabel', 'optionalUpdateMessage', 'title']
      keys.forEach(key => {
        const value = Utils.idx(config, config => config.updateDialog[key])
        if (value) {
          config.updateDialog[key] = value
        }
      })
      return config
    } catch (ignore) { }
    return { updateDialog: true }
  }

  _onAppReady = () => {
    CodePush.checkForUpdate().then(this._onUpdateAvailable).catch(() => { })
  }

  _onUpdateAvailable = (update) => {
    const config = this._getUpdateConfig(update)
    CodePush.sync(config)
  }
}
