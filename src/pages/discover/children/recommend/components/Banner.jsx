import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getBannersData } from '../store/actions'

import { Carousel } from 'antd'
import { BannerWrap } from './style'

export default memo(function Banner() {
  // 本页面不需要redux的数据
  const [currentIndex, setCurrentIndex] = useState(0)


  // 与redux相关联： 拿数据并且操作
  const { recommendBanners } = useSelector(state => ({
    recommendBanners: state.getIn(['recommend', 'recommendBanners'])
  }), shallowEqual)
  const dispatch = useDispatch();
   
  // 发送对应的网络请求
  useEffect(() => {
    dispatch(getBannersData())
  }, [dispatch])

  // 业务逻辑代码
  // 获取轮播的ref
  const bannerRef = useRef()
  const changeBanner = useCallback((from, to) => {
    setCurrentIndex(to)
  },[])

  const bgImage = recommendBanners[currentIndex] && (recommendBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
 
  return (
    <BannerWrap bgImage={bgImage}>
      <div className="banner-img wrap-v1">
        <Carousel className="img-wrap" autoplay ref={bannerRef} beforeChange={changeBanner}>
          {
            recommendBanners.map((item, index) => {
              return (
              <div className="item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.typeTitle} />
              </div>
            )
            })
          }
        </Carousel>
        <div className="carousel-left btn" onClick={e => bannerRef.current.prev()}></div>
        <div className="carousel-right btn"  onClick={e => bannerRef.current.next()}></div> 
      </div>
    </BannerWrap>
  )
})
