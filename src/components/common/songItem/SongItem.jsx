import React, { memo } from 'react'
import { getCount, getSizeImage } from "@/utils/format";
import { SongItemWrap } from './style';

export default memo(function SongItem(props) {
  const { song } = props;
  return (
    <SongItemWrap>
      <div className="song-top">
        <img src={getSizeImage(song.picUrl, 140)} alt="" />
        <div className="song sprite_covor">
          <div className="song-content sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(song.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="song-bottom text-nowrap">
        {song.name}
      </div>
      <div className="song-source text-nowrap">
        by {song.copywriter || song.creator.nickname}
      </div>
    </SongItemWrap>
  )
})
