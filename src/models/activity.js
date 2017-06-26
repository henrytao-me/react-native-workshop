import { Record } from 'immutable'

const Base = Record({
  id: undefined,
  highlightTitle: '',
  image: undefined,
  title: ''
}, 'Activity')

export default class Activity extends Base {

}
