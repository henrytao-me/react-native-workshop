import React from 'react'
import {
  PureComponent,
  View
} from 'react-native-mdcore'

export default class ViewGroup extends PureComponent {

  state = {
    index: 0
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children && this.props.children
          .filter((child, index) => index === this.state.index)
          .map(child => child)}
      </View>
    )
  }

  show = (index) => {
    this.setState({ index })
  }
}
