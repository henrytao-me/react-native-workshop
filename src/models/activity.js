import { Model } from 'redux-persist-model'

const Base = Model.create('Activity', {
  id: undefined,
  highlightTitle: '',
  image: undefined,
  title: ''
})

export default class Activity extends Base {

}
