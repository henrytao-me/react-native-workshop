import { createSelector } from 'reselect'

const filter = (max = 5) => createSelector(
  state => state.experiences.ids,
  state => state.experiences.all,
  (ids, data) => ids.slice(0, max).map(id => data[id])
)

const filterAndConvertToAttraction = (max = 5) => createSelector(
  filter(max),
  experiences => experiences.map(experience => experience.toAttraction())
)

export default { filter, filterAndConvertToAttraction }
