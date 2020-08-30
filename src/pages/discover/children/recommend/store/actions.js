import * as actionTypes from './constants'
// '@/api/request/recommend'
import { getBanners, getHotRecommends, getNewSongs } from '../../../../../api/requests/recommend' 

const getBannersAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_BANNER,
  recommendBanners: res.banners
})

const saveHotRecommendsAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_HOT,
  recommendHotLists: res.result
})

const saveNewSongssAction = (res) => ({ 
  type: actionTypes.GET_NEW_SONGS,
  recommendNewSongs: res.albums
})

export const getBannersData = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(getBannersAction(res));
    })
  }
};

export const getHotRecommendsData = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(saveHotRecommendsAction(res));
    })
  }
};

export const getNewSongsData = (limit) => {
  return dispatch => {
    getNewSongs(limit).then(res => {
      console.log(res)
      dispatch(saveNewSongssAction(res));
    })
  }
};