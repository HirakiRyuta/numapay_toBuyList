import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import toBuyListReducer from './toBuyListReducer'

/** todo
 * reducerを作ったらここに追加
*/

export default combineReducers({ toBuyListReducer, form })