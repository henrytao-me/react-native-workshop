import { Model } from 'redux-persist-model'

import Activity from './activity'

const Base = Model.create('Experience', {
  id: undefined,
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

  toActivity() {
    return new Activity({
      highlightTitle: `$${this.price}`,
      title: this.title
    })
  }
}
