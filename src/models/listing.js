import { Record } from 'immutable'

import Activity from './activity'

const Base = Record({
  id: undefined,
  image: undefined,
  price: 0,
  title: ''
}, 'Listing')

export default class Listing extends Base {

  toActivity() {
    return new Activity({
      id: this.id,
      highlightTitle: `$${this.price}`,
      image: this.image,
      title: this.title
    })
  }
}
