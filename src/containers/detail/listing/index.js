import React from 'react'
import {
  Button,
  PropTypes,
  PureComponent,
  Text,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { bindActionCreators, connect } from '@store'

class ListingDetail extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', marginBottom: theme.layout.spacing }}
          subType="hint"
          type="display1"
          value={`Listing Detail\n${this.props.listing.title}`} />
        <Button
          palette="primary"
          title="Back"
          onPress={this.props.navigatorActions.goBack} />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.navigation.state.params
  return {
    listing: state.listings.all[id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigatorActions: bindActionCreators(Actions.navigator, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetail)
