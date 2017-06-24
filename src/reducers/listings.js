import { CONST } from '@store'

// const SAMPLES = [
//   new Listing({ id: 1, title: 'Listing 1' }),
//   new Listing({ id: 2, title: 'Listing 2' }),
//   new Listing({ id: 3, title: 'Listing 3' }),
//   new Listing({ id: 4, title: 'Listing 4' }),
//   new Listing({ id: 5, title: 'Listing 5' }),
//   new Listing({ id: 6, title: 'Listing 6' }),
//   new Listing({ id: 7, title: 'Listing 7' }),
//   new Listing({ id: 8, title: 'Listing 8' }),
//   new Listing({ id: 9, title: 'Listing 9' })
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
    case CONST.LISTINGS_LOADED: {
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
