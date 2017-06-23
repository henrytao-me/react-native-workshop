import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { ActivityHorizontalList } from '@components'

export default class Experience extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <ActivityHorizontalList style={{ marginTop: theme.layout.spacing }}
          title="Nature"
          seeAllEnabled={false} />
        <ActivityHorizontalList style={{ marginTop: theme.layout.spacing }}
          title="Arts & Design"
          seeAllEnabled={false} />
        <ActivityHorizontalList style={{ marginTop: theme.layout.spacing }}
          title="Food & Drink"
          seeAllEnabled={false} />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}
