import React, { memo } from 'react'

import Banner from './components/banner/Banner';
import HotRecommend from './components/hot-recommend/HotRecommend';
import NewSong from './components/new-song/NewSong';
import Ranking from './components/ranking/Ranking';
import SettleSinger from './components/settle-singer/SettleSinger';

import { Button } from 'antd';
import { RecommendWrap } from './style'

export default memo(function Recommend() {
  return (
    <RecommendWrap>
      <Banner />
      <div className="wrap-v2 content">
        <div className="content-left">
          <HotRecommend />
          <NewSong />
          <Ranking />
        </div>
        <div className="content-right">
          <div className="login">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <Button className="login-btn">用户登录</Button>
          </div>
          <SettleSinger />
        </div>
      </div>

    </RecommendWrap>
  )
})
