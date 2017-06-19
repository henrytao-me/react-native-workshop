import React, { Component, PropTypes } from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

import Button from './Button'
import Text from './Text'

class Dialog extends Component {

  static contextTypes = {
    styles: PropTypes.object,
    theme: PropTypes.object
  }

  static propTypes = {
    message: PropTypes.string,
    negativeText: PropTypes.string,
    onNegativePressed: PropTypes.func,
    onPositivePressed: PropTypes.func,
    positiveText: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    onNegativePressed: function (dialog) {
      dialog.dismiss()
    },
    onPositivePressed: function (dialog) {
      // do nothing
    },
    positiveText: 'OK'
  }

  state = {
    visible: false
  }

  render() {
    const { styles, theme } = this.context
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.visible}
        onRequestClose={this._onHide}>

        <View style={{ position: 'relative', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableWithoutFeedback onPress={this._onOutsidePressed}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: theme.color.dialogBackground }} />
          </TouchableWithoutFeedback>
          <View style={{ margin: theme.layout.dialogSpacing, padding: theme.layout.dialogSpacing, backgroundColor: theme.color.backgroundLight, flex: 1 }}>
            {this._renderTitle()}
            {this._renderMessage()}
            <View style={{ height: 52 - theme.layout.dialogSpacing }} />
            {this._renderButtons()}
          </View>
        </View>
      </Modal>
    )
  }

  _renderButtons = () => {
    const { styles, theme } = this.context
    return (
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 52, padding: 8, justifyContent: 'flex-end', flexDirection: 'row' }}>
        {this._renderNegativeButton()}
        <View style={{ width: 8 }} />
        {this._renderPositiveButton()}
      </View>
    )
  }

  _renderNegativeButton = () => {
    const { negativeText } = this.props
    if (!!negativeText && negativeText.length > 0) {
      return (
        <Button type="borderless" title={negativeText} onPress={this._onNegativePressed} />
      )
    }
    return null
  }

  _renderPositiveButton = () => {
    const { positiveText } = this.props
    if (!!positiveText && positiveText.length > 0) {
      return (
        <Button type="borderless" title={positiveText} onPress={this._onPositivePressed} />
      )
    }
    return null
  }

  _renderMessage = () => {
    const { styles, theme } = this.context
    const { message } = this.props
    if (!!message && message.length > 0) {
      return (
        <Text type="subhead1" style={{ marginBottom: theme.layout.dialogSpacing }}>{message}</Text>
      )
    }
    return null
  }

  _renderTitle = () => {
    const { styles, theme } = this.context
    const { title } = this.props
    if (!!title && title.length > 0) {
      return (
        <Text type="title" style={{ marginBottom: theme.layout.dialogSpacing }}>{title}</Text>
      )
    }
    return null
  }

  dismiss = () => {
    this.setState({ visible: false })
  }

  show = () => {
    this.setState({ visible: true })
  }

  _onOutsidePressed = () => {
    this.dismiss()
  }

  _onHide = () => {
    // do nothing
  }

  _onNegativePressed = () => {
    if (!!this.props.onNegativePressed) {
      this.props.onNegativePressed(this)
    }
  }

  _onPositivePressed = () => {
    if (!!this.props.onPositivePressed) {
      this.props.onPositivePressed(this)
    }
  }
}

export default Dialog
