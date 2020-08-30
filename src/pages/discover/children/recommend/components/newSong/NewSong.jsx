import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getNewSongsData } from '../../store/actions'

import HeaderColumn from "@/components/common/headerColumn/HeaderColumn"

import NewSongItem from "@/components/common/newSongItem/NewSongItem"

import { Carousel } from 'antd'
import { NewWrap } from './style'
export default memo(function NewSong() {

  const { recommendNewSongs } = useSelector(state => ({
    recommendNewSongs: state.getIn(['recommend', 'recommendNewSongs'])
  }), shallowEqual)

  // 发送对应的网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewSongsData(20))
  }, [dispatch])

    // 获取轮播的ref
    const bannerRef = useRef()
  return (
    <NewWrap>
      <HeaderColumn title="新碟上架" />
      <div className="new-songs-content">
        <button className="left sprite_02"  onClick={e => bannerRef.current.prev()}></button>
        <div className="new-songs-carousel">
          <Carousel dots={false} ref={bannerRef} >
            {
              [0, 1, 2, 3].map(el => {
                return (
                  <div key={el} className="carousel-page">
                    {
                      recommendNewSongs.slice(el * 5, (el + 1) * 5).map(item => {
                        return (
                          <NewSongItem key={item.id}
                          item={item}
                          size={110}
                          width={118}
                          bg="-570px" />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>,
         </div>


        <button className="right sprite_02"  onClick={e => bannerRef.current.next()}></button>
      </div>
    </NewWrap>
  )
})
