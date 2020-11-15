import { Map } from 'immutable'

import * as actionTypes from './constants'

const defautlState = Map({
  recommendBanners: [],
  recommendHotLists: [],
  recommendNewSongs: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  settleSingerLists: []
}) 


function reducer(state = defautlState, action) {
  switch(action.type) {
    case actionTypes.GET_RECOMMEND_BANNER:
      return state.set('recommendBanners', action.recommendBanners)
    case actionTypes.GET_RECOMMEND_HOT:
      return state.set('recommendHotLists', action.recommendHotLists)
    case actionTypes.GET_NEW_SONGS:
      return state.set('recommendNewSongs', action.recommendNewSongs)
    case actionTypes.GET_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.GET_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.GET_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case actionTypes.GET_SETTLT_SINGER:
      return state.set('settleSingerLists', action.settleSingerLists)
    default: 
      return state
  }
}

export default reducer