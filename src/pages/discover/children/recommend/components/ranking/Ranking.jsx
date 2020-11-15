import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HeaderColumn from "@/components/common/header-column/HeaderColumn"
import RankingItem from '@/components/common/ranking-item/RankingItem';
import { RankingWrapper } from './style';
import { getRankingdata } from '../../store/actions';

export default memo(function Ranking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getRankingdata(0));
    dispatch(getRankingdata(2));
    dispatch(getRankingdata(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <HeaderColumn title="榜单" />
      <div className="tops">
        <RankingItem info={upRanking}/>
        <RankingItem info={newRanking}/>
        <RankingItem info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
