import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { ActivityItem } from '@components'
import { bindActionCreators, connect } from '@store'

class Listing extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView style={{ paddingLeft: theme.layout.spacing, paddingRight: theme.layout.spacing }}>
        <ActivityItem style={{ marginTop: theme.layout.spacing }} />
        <ActivityItem style={{ marginTop: theme.layout.spacing }} />
        <ActivityItem style={{ marginTop: theme.layout.spacing }} />
        <ActivityItem style={{ marginTop: theme.layout.spacing }} />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, null)(Listing)
