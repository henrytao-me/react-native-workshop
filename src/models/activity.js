import { Model } from 'redux-persist-model'

const Base = Model.create('Activity', {
  highlightTitle: '',
  title: ''
})

export default class Activity extends Base {

}
