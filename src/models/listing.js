import { Model } from 'redux-persist-model'

import Activity from './activity'

const Base = Model.create('Listing', {
  id: undefined,
  price: 0,
  title: ''
})

export default class Listing extends Base {

  toActivity() {
    return new Activity({
      highlightTitle: `$${this.price}`,
      title: this.title
    })
  }
}
