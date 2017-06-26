import { Record } from 'immutable'

import Activity from './activity'

const Base = Record({
  id: undefined,
  category: '',
  image: undefined,
  price: 0,
  title: ''
}, 'Experience')

export default class Experience extends Base {

  toActivity() {
    return new Activity({
      id: this.id,
      highlightTitle: `$${this.price}`,
      image: this.image,
      title: this.title
    })
  }
}
