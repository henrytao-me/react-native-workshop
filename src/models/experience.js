import { Model } from 'redux-persist-model'

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
  title: '',
  type: ''
})

export default class Experience extends Base {

}
