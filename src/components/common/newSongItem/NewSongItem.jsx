import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format';

import { NewSongItemWrap } from './style';

export default memo(function NewSongItem(props) {
  const { item, size = 130, width = 153, bg = "-845px" } = props;
  return (
    <NewSongItemWrap size={size} width={width} bg={bg}>
       <div className="album-image">
        <img src={getSizeImage(item.picUrl, size)} alt="" />
        <a href="/todo" className="cover image_cover">{item.name}</a>
      </div>
      <div className="album-item">
        <div className="name text-nowrap">{item.name}</div>
        <div className="artist text-nowrap">{item.artist.name}</div>
      </div>
    </NewSongItemWrap>
  )
})
