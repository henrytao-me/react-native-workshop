import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { AttractionItem } from '@components'

export default class Home extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView style={{ paddingLeft: theme.layout.spacing, paddingRight: theme.layout.spacing }}>
        <AttractionItem style={{ marginTop: theme.layout.spacing }} />
        <AttractionItem style={{ marginTop: theme.layout.spacing }} />
        <AttractionItem style={{ marginTop: theme.layout.spacing }} />
        <AttractionItem style={{ marginTop: theme.layout.spacing }} />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}
