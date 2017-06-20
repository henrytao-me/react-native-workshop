import { NativeModules, Platform } from 'react-native'
const { StatusBarManager } = NativeModules

StatusBarManager._getHeight = StatusBarManager.getHeight
StatusBarManager.getHeight = (callback = (_data) => { }) => {
  if (Platform.OS === 'ios') {
    StatusBarManager._getHeight(callback)
  } else {
    callback({ height: StatusBarManager.HEIGHT })
  }
}

export default NativeModules
