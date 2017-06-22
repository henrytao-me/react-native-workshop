export const setCode = (code) => async (dispatch) => {
  dispatch({
    type: 'test',
    payload: { code }
  })
}