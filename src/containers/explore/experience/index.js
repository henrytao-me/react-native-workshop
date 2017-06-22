import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { HorizontalList } from '@components'

export default class Experience extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <HorizontalList style={{ marginTop: theme.layout.spacing }} title="Nature" />
        <HorizontalList style={{ marginTop: theme.layout.spacing }} title="Arts & Design" />
        <HorizontalList style={{ marginTop: theme.layout.spacing }} title="Food & Drink" />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}
