import { Experience } from '@models'

const INITIAL_STATE = {
  all: {
    1: new Experience({ title: 'Experience 1' }),
    2: new Experience({ title: 'Experience 2' }),
    3: new Experience({ title: 'Experience 3' }),
    4: new Experience({ title: 'Experience 4' }),
    5: new Experience({ title: 'Experience 5' }),
    6: new Experience({ title: 'Experience 6' }),
    7: new Experience({ title: 'Experience 7' }),
    8: new Experience({ title: 'Experience 8' }),
    9: new Experience({ title: 'Experience 9' })
  },
  ids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
