import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom';
import { dicoverMenu } from '@/data';
import { DiscoverWrap } from './style';
export default memo(function Discover(props) {
  const { route } = props
  return (
    <DiscoverWrap>
      <div className="header">
        <div className="wrap-v1 nav">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="nav-item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div> 
      </div>
        { renderRoutes(route.children) }
    </DiscoverWrap>
  )
})
