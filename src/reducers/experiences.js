import { Experience } from '@models'

const INITIAL_STATE = {
  all: {
    1: new Experience({ title: 'title 1' }),
    2: new Experience({ title: 'title 2' }),
    3: new Experience({ title: 'title 3' }),
    4: new Experience({ title: 'title 4' }),
    5: new Experience({ title: 'title 5' }),
    6: new Experience({ title: 'title 6' }),
    7: new Experience({ title: 'title 7' }),
    8: new Experience({ title: 'title 8' }),
    9: new Experience({ title: 'title 9' })
  },
  ids: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
