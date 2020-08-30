import styled from 'styled-components'

export const NewWrap = styled.div`
  margin-top: 50px;
  .new-songs-content {
    height: 200px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    .left {
      width: 25px;
      height: 25px;
      cursor: pointer;
      background-position: -260px -75px;
    }
    .right {
      width: 25px;
      height: 25px;
      cursor: pointer;
      background-position: -300px -75px;
    }
    .new-songs-carousel {
      width: 670px;
      height: 150px;
      .carousel-page {
        display: flex!important;
      }
    }
  }

`