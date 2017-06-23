import { Model } from 'redux-persist-model'

const Base = Model.create('Activity', {
  id: undefined,
  highlightTitle: '',
  title: ''
})

export default class Activity extends Base {

}
