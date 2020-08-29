import React, { memo } from 'react'
import { ColumnWrap } from './style';

export default memo(function HeaderColumn(props) {
  const { title, lists } = props;
  return (
    <ColumnWrap className="sprite_02">
      <div className="column-left">
        <div className="title">{title}</div>
        <div className="lists">
          {
            lists.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="aa">{item}</a>
                  <span className="line">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="column-right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ColumnWrap>
  )
})
