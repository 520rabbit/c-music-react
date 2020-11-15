/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/data';

import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrap } from './style';



export default memo(function AppHeader() {

  // 布局结构代码
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title} <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </a>
    }
  }
  return (
    <HeaderWrap>
      <div className="content wrap-v1">
        <div className="nav-left">
          <a href="#/" className="logo sprite_01"></a>
          <div className="nav-router">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="router-item">
                    {showItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </div> 

        <div className="nav-right">
            <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
            <Button className="center">创作者中心</Button>
            <Button className="login-btn">登录</Button>
        </div>
      </div>
      <div className="content-line"></div>
    </HeaderWrap>
  )
})
