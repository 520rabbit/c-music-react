import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getArtistData } from '../../store/actions'

import { getSizeImage } from "@/utils/format";

import SmallHeader from '@/components/common/small-header/SmallHeader';
import { SettltWrap } from './style'

export default memo(function SettleSinger() {

  const dispatch = useDispatch();
  const { settleSingerLists } = useSelector((state) => ({
    settleSingerLists: state.getIn(["recommend", "settleSingerLists"])
  }), shallowEqual);
  console.log(settleSingerLists)
  useEffect(() => {
    dispatch(getArtistData());
  }, [dispatch])

  return (
    <SettltWrap>
      <div className="lists">
        <SmallHeader title="入驻歌手" more="查看全部>" />
        <div className="list-wrap">
          {
            settleSingerLists.map(item => {
              return (
                <a href="/song" className="item" key={item.id}>
                  <div className="avatar"><img src={getSizeImage(item.img1v1Url, 62)} alt="" /></div>
                  <div className="info">
                    <h3 className="title">{item.alias.join("") || item.name}</h3>
                    <p className="name">{item.name}</p>
                  </div>
                </a>
              )
            })
          }
        </div>
      </div>
    </SettltWrap>
  )
})
