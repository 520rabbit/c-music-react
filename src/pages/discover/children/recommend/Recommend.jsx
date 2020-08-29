import React, { memo } from 'react'

import Banner from './components/banner/Banner';
import HotRecommend from './components/hotRecommend/HotRecommend';

import { RecommendWrap } from './style'

export default memo(function Recommend() {
  return (
    <RecommendWrap>
      <Banner />
      <div className="wrap-v2 content">
        <div className="content-left">
          <HotRecommend />
          </div>
      </div>

    </RecommendWrap>
  )
})
