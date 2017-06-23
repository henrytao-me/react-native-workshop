import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import { ActivityVerticalList } from '@components'
import * as Selectors from '@selectors'
import { bindActionCreators, connect } from '@store'

class Listing extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    return (
      <ActivityVerticalList
        data={this.props.listingsAsActivity}
        imageRatio={1.5} />
    )
  }
}

const mapStateToProps = () => {
  const getListingsAsActivity = Selectors.listing.filterAndConvertToActivity(0)
  return (state, props) => ({
    listingsAsActivity: getListingsAsActivity(state, props)
  })
}

export default connect(mapStateToProps, null)(Listing)
