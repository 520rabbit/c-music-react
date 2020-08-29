import styled from 'styled-components'

export const BannerWrap = styled.div`
  width: 100%;
  background: url(${props => props.bgImage}) center center/8000px;
  min-width: 1200px;
  height: 380px;
  .banner-img {
    position: relative; 
    .img-wrap {
      width: 1026px;
      margin: auto;
      img {
        width: 100%;
      }
    }
    .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 66px;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
      &.carousel-left {
        left: 20px;
        background-position: 0 -360px;
      }
      &.carousel-right {
        right: 20px;
        background-position: 0 -508px;
      }
    }
  }

`