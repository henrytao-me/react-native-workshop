import { createSelector } from 'reselect'

const filter = (max = 5) => createSelector(
  state => state.experiences.ids,
  state => state.experiences.all,
  (ids, data) => ids.slice(0, max > 0 ? max : ids.length).map(id => data[id])
)

const filterAndConvertToActivity = (max = 5) => createSelector(
  filter(max),
  experiences => experiences.map(experience => experience.toActivity())
)

export default { filter, filterAndConvertToActivity }
