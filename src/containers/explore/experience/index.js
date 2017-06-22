import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { ExperienceHorizontalList } from '@components'

export default class Experience extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <ExperienceHorizontalList style={{ marginTop: theme.layout.spacing }} title="Nature" />
        <ExperienceHorizontalList style={{ marginTop: theme.layout.spacing }} title="Arts & Design" />
        <ExperienceHorizontalList style={{ marginTop: theme.layout.spacing }} title="Food & Drink" />
        <ExperienceHorizontalList style={{ marginTop: theme.layout.spacing }} title="Music" />
        <ExperienceHorizontalList style={{ marginTop: theme.layout.spacing }} title="Entertainment" />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}
