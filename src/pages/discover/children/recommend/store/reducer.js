import { Map } from 'immutable'

import * as actionTypes from './constants'

const defautlState = Map({
  recommendBanners: [],
  recommendHotLists: []
}) 
function reducer(state = defautlState, action) {
  switch(action.type) {
    case actionTypes.GET_RECOMMEND_BANNER:
      return state.set('recommendBanners', action.recommendBanners)
    case actionTypes.GET_RECOMMEND_HOT:
      return state.set('recommendHotLists', action.recommendHotLists)
    default: 
      return state
  }
}

export default reducer