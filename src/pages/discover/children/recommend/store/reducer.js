import { Map } from 'immutable'

import * as actionTypes from './constants'

const defautlState = Map({
  recommendBanners: []
}) 
function reducer(state = defautlState, action) {
  switch(action.type) {
    case actionTypes.GET_RECOMMEND_BANNER:
      return state.set('recommendBanners', action.recommendBanners)
    default: 
      return state
  }
}

export default reducer