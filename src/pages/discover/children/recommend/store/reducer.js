import { Map } from 'immutable'

import * as actionTypes from './constants'

const defautlState = Map({
  recommendBanners: [],
  recommendHotLists: [],
  recommendNewSongs: []
}) 
function reducer(state = defautlState, action) {
  switch(action.type) {
    case actionTypes.GET_RECOMMEND_BANNER:
      return state.set('recommendBanners', action.recommendBanners)
    case actionTypes.GET_RECOMMEND_HOT:
      return state.set('recommendHotLists', action.recommendHotLists)
    case actionTypes.GET_NEW_SONGS:
      return state.set('recommendNewSongs', action.recommendNewSongs)
    default: 
      return state
  }
}

export default reducer