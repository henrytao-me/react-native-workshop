import { Model } from 'redux-persist-model'

import Activity from './activity'

const Base = Model.create('Experience', {
  id: undefined,
  category: '',
  image: undefined,
  price: 0,
  title: ''
})

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
