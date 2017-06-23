import { CONST } from '@store'

// const SAMPLES = [
//   new Experience({ id: 1, category: 'Nature', title: 'Experience 1' }),
//   new Experience({ id: 2, category: 'Nature', title: 'Experience 2' }),
//   new Experience({ id: 3, category: 'Nature', title: 'Experience 3' }),
//   new Experience({ id: 4, category: 'Nature', title: 'Experience 4' }),
//   new Experience({ id: 5, category: 'Nature', title: 'Experience 5' }),
//   new Experience({ id: 6, category: 'Arts & Design', title: 'Experience 6' }),
//   new Experience({ id: 7, category: 'Arts & Design', title: 'Experience 7' }),
//   new Experience({ id: 8, category: 'Arts & Design', title: 'Experience 8' }),
//   new Experience({ id: 9, category: 'Arts & Design', title: 'Experience 9' })
// ]

// const INITIAL_STATE = {
//   all: SAMPLES.reduce((acc, data) => {
//     acc[data.id] = data
//     return acc
//   }, {}),
//   ids: SAMPLES.map(data => data.id)
// }

const INITIAL_STATE = {
  all: {},
  ids: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONST.EXPERIENCES_LOADED: {
      const { objects } = action.payload
      return {
        ...state,
        all: objects.reduce((acc, object) => {
          acc[object.id] = object
          return acc
        }, {}),
        ids: objects.map(object => object.id)
      }
    }
    default:
      return state
  }
}
