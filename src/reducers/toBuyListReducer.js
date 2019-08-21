import { READ_TO_BUY_ITEMS, COMPLETED_TO_BUY } from '../actions/index'
import _ from 'lodash'

const initialState = {}

export default (state = initialState, action) => {

  switch (action.type) {

    // resolve用 買わなければいけないものリスト
    case READ_TO_BUY_ITEMS:
      const { data } = action.response
      const toBuyItems = _.mapKeys(data, 'request_id')
      return {
        ...state,
        toBuyItems
      }

    // resolve用 買ったらチェックボックスにクリックして削除
    case COMPLETED_TO_BUY:
      delete state[action.request_id]
      return {
        ...state
      }

    default:
      return state
  }
}