import { Listing } from '@models'

const INITIAL_STATE = {
  all: {
    1: new Listing({ title: 'Listing 1' }),
    2: new Listing({ title: 'Listing 2' }),
    3: new Listing({ title: 'Listing 3' }),
    4: new Listing({ title: 'Listing 4' }),
    5: new Listing({ title: 'Listing 5' }),
    6: new Listing({ title: 'Listing 6' }),
    7: new Listing({ title: 'Listing 7' }),
    8: new Listing({ title: 'Listing 8' }),
    9: new Listing({ title: 'Listing 9' })
  },
  ids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
