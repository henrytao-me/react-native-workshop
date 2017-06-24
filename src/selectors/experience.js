import { createSelector } from 'reselect'

const filterAndConvertToActivity = (max = 5) => createSelector(
  state => state.experiences.ids,
  state => state.experiences.all,
  (ids, data) => ids.slice(0, max > 0 ? max : ids.length).map(id => data[id].toActivity())
)

const filterByCategoryAndConvertToActivity = (maxItemPerCategory = 5) => createSelector(
  state => state.experiences.ids,
  state => state.experiences.all,
  (ids, data) => {
    const categories = ids.reduce((acc, id) => {
      const category = data[id].category
      acc[category] = acc[category] || []
      if (acc[category].length < maxItemPerCategory) {
        acc[category].push(data[id].toActivity())
      }
      return acc
    }, {})
    return Object.keys(categories).map(category => ({ category, data: categories[category] }))
  }
)

export default { filterAndConvertToActivity, filterByCategoryAndConvertToActivity }
