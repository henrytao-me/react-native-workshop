import React from 'react'
import {
  PureComponent,
  ScrollView
} from 'react-native-mdcore'

import { ExperienceHorizontalList } from '@components'

export default class Home extends PureComponent {

  render() {
    return (
      <ScrollView>
        <ExperienceHorizontalList title="Experiences" />
      </ScrollView>
    )
  }
}
