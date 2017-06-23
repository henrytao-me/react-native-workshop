import React from 'react'
import {
  PropTypes,
  PureComponent,
  ScrollView,
  View
} from 'react-native-mdcore'

import * as Actions from '@actions'
import { AttractionHorizontalList } from '@components'
import * as Selectors from '@selectors'
import { bindActionCreators, connect } from '@store'

class Recommend extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  static propTypes = {
    onSeeAllPress: PropTypes.func
  }

  static defaultProps = {
    onSeeAllPress: () => { }
  }

  render() {
    const { theme } = this.context
    return (
      <ScrollView>
        <AttractionHorizontalList tag="experiences" style={{ marginTop: theme.layout.spacing }}
          data={this.props.experiencesAsAttraction}
          imageRatio={0.67}
          title="Experiences"
          onSeeAllPress={this.props.onSeeAllPress} />
        <AttractionHorizontalList tag="homes" style={{ marginTop: theme.layout.spacing }}
          data={this.props.experiencesAsAttraction}
          imageRatio={1.5}
          maxItemWidth={240}
          title="Homes"
          onSeeAllPress={this.props.onSeeAllPress} />
        <View style={{ height: theme.layout.spacing * 2 }} />
      </ScrollView>
    )
  }
}

const mapStateToProps = () => {
  const getExperiencesAsAttraction = Selectors.experiences.filterAndConvertToAttraction()
  return (state, props) => ({
    experiencesAsAttraction: getExperiencesAsAttraction(state, props)
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingsActions: bindActionCreators(Actions.settings, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
