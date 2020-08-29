import * as actionTypes from './constants'
// '@/api/request/recommend'
import { getBanners, getHotRecommends } from '../../../../../api/requests/recommend' 

const getBannersAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_BANNER,
  recommendBanners: res.banners
})

const saveHotRecommendsAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_HOT,
  recommendHotLists: res.result
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