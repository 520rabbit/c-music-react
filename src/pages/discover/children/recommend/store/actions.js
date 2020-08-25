import * as actionTypes from './constants'
// '@/api/request/recommend'
import { getBanners } from '../../../../../api/requests/recommend' 

const getBannersAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_BANNER,
  recommendBanners: res.banners
})

export const getBannersData = () => {
  return dispatch => {
    getBanners().then(res => {
      console.log(res)
      dispatch(getBannersAction(res));
    })
  }
};