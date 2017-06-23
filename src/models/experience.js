import { Model } from 'redux-persist-model'

import Attraction from './attraction'

const Base = Model.create('Experience', {
  category: '',
  communication: '',
  equipment: '',
  host: '',
  hour: 0,
  location: '',
  longDesc: '',
  longNote: '',
  price: 0,
  shortDesc: '',
  shortNote: '',
  title: ''
})

export default class Experience extends Base {

  toAttraction() {
    return new Attraction({
      highlightTitle: `$${this.price}`,
      title: this.title
    })
  }
}
