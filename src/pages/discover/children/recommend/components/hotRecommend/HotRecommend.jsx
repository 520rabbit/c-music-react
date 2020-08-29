import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getHotRecommendsData } from '../../store/actions'

import HeaderColumn from "@/components/common/headerColumn/HeaderColumn"

import { HotWrap } from './style'
export default memo(function HotRecommend() {
   

    const { recommendHotLists } = useSelector(state => ({
      recommendHotLists: state.getIn(['recommend', 'recommendHotLists'])
    }), shallowEqual)

    // 发送对应的网络请求
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getHotRecommendsData(8))
    }, [dispatch])
  return (
    <HotWrap>
      <HeaderColumn title="热门推荐" lists={["华语", "流行", "民谣", "摇滚", "电子"]} />
      <div className="lstst">
        {
          recommendHotLists.map(item => {
            return(
            <div key={item.id}>{item.name}</div>
            )
          })
        }
      </div>
    </HotWrap>
  )
})