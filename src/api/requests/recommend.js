import request from '../ajax';

export function getBanners() {
  return request({
    url: "/banner"
  })
}
