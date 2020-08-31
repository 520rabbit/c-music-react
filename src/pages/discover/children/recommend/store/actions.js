import * as actionTypes from './constants'
// '@/api/request/recommend'
import { getBanners, getHotRecommends, getNewSongs, getRanking } from '../../../../../api/requests/recommend' 

// 轮播图
const getBannersAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_BANNER,
  recommendBanners: res.banners
})

// 热门推荐
const saveHotRecommendsAction = (res) => ({ 
  type: actionTypes.GET_RECOMMEND_HOT,
  recommendHotLists: res.result
})

// 新碟上架
const saveNewSongssAction = (res) => ({ 
  type: actionTypes.GET_NEW_SONGS,
  recommendNewSongs: res.albums
})

// 榜单
const saveUpRankingAction = (res) => ({ 
  type: actionTypes.GET_UP_RANKING,
  upRanking: res.playlist
})

const saveNewRankingAction = (res) => ({ 
  type: actionTypes.GET_NEW_RANKING,
  newRanking: res.playlist
})

const saveOriginAction = (res) => ({ 
  type: actionTypes.GET_ORIGIN_RANKING,
  originRanking: res.playlist
})


// 轮播图
export const getBannersData = () => {
  return dispatch => {
    getBanners().then(res => {
      dispatch(getBannersAction(res));
    })
  }
};

// 热门推荐
export const getHotRecommendsData = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(saveHotRecommendsAction(res));
    })
  }
};

// 新碟上架
export const getNewSongsData = (limit) => {
  return dispatch => {
    getNewSongs(limit).then(res => {
      dispatch(saveNewSongssAction(res));
    })
  }
};


// 榜单
export const getRankingdata = (idx) => {
  return dispatch => {
    getRanking(idx).then(res => {
      switch(idx) {
        case 0: 
          dispatch(saveUpRankingAction(res));
        break;
        case 2: 
          dispatch(saveNewRankingAction(res));
        break;
        case 3: 
          dispatch(saveOriginAction(res));
        break;
        default:
      }
    })
  }
};
