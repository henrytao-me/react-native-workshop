import { Model } from 'redux-persist-model'

const Base = Model.create('Attraction', {
  highlightTitle: '',
  title: ''
})

export default class Attraction extends Base {

}
