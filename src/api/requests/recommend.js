import request from '../ajax';

// 推荐轮播图
export function getBanners() {
  return request({
    url: "/banner"
  })
}
// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewSongs(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getRanking(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}

export function getArtist(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}