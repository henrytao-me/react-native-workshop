import { CONST } from '@store'

export const syncExperiences = () => async (dispatch, { apiModule }) => {
  const experiences = await apiModule.getExperiences()
  dispatch({
    type: CONST.EXPERIENCES_LOADED,
    payload: { objects: experiences }
  })
}

export const syncListings = () => async (dispatch, { apiModule }) => {
  const listings = await apiModule.getListings()
  dispatch({
    type: CONST.LISTINGS_LOADED,
    payload: { objects: listings }
  })
}
