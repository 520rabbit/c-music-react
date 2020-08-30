import React, { memo } from 'react'

import Banner from './components/banner/Banner';
import HotRecommend from './components/hotRecommend/HotRecommend';
import NewSong from './components/newSong/NewSong';

import { RecommendWrap } from './style'

export default memo(function Recommend() {
  return (
    <RecommendWrap>
      <Banner />
      <div className="wrap-v2 content">
        <div className="content-left">
          <HotRecommend />
          <NewSong />
        </div>
      </div>

    </RecommendWrap>
  )
})
