import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { ActivityHorizontalList } from '@components'
import * as Selectors from '@selectors'
import { bindActionCreators, connect } from '@store'

class Experience extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        {this.props.experiencesByCategoryAsActivity && this.props.experiencesByCategoryAsActivity.map(this._renderActivities)}
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }

  _renderActivities = ({ category, data }, index) => {
    const { theme } = this.context
    return (
      <ActivityHorizontalList key={index} style={{ marginTop: theme.layout.spacing }}
        data={data}
        imageRatio={0.67}
        title={category}
        seeAllEnabled={false} />
    )
  }
}

const mapStateToProps = () => {
  const getExperiencesByCategoryAsActivity = Selectors.experience.filterByCategoryAndConvertToActivity()
  return (state, props) => ({
    experiencesByCategoryAsActivity: getExperiencesByCategoryAsActivity(state, props)
  })
}

export default connect(mapStateToProps, null)(Experience)
