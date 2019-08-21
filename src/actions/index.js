export const READ_TO_BUY_ITEMS = 'READ_TO_BUY_ITEMS'
export const COMPLETED_TO_BUY = 'COMPLETED_TO_BUY'

export const readToBuyItems = () => dispatch => {
  const request_id = 0
  const name = 'たまご'
  const count = 2
  const is_urgent = true
  const created_at = '201904200900'

  const request_id2 = 1
  const name2 = '納豆'
  const count2 = 1
  const is_urgent2 = false
  const created_at2 = '201904200830'

  const response = [{ request_id, name, count, is_urgent, created_at }, { request_id2, name2, count2, is_urgent2, created_at2 }]
  dispatch({ type: READ_TO_BUY_ITEMS, response })
}

export const completedToBuy = id => dispatch => {

  dispatch({ type: COMPLETED_TO_BUY, id })
}