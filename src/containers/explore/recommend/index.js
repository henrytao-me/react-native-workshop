import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { HorizontalList } from '@components'

export default class Recommend extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <HorizontalList style={{ marginTop: theme.layout.spacing }}
          title="Experiences" />
        <HorizontalList style={{ marginTop: theme.layout.spacing }}
          maxItemWidth={480}
          title="Homes" />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}
