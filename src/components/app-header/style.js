import styled from 'styled-components'

export const HeaderWrap = styled.div`
  height: 75px;
  background-color: #242424; 
  min-width: 1200px;
  font-size: 14px;
  .content {
    height: 70px;
    display: flex; 
    justify-content: space-between;
    .nav-left {
      display: flex;
      justify-content: left;
      .logo {
        display: block;
        background-position: 0 0;
        width: 176px;
        height: 100%; 
        text-indent: -9999px;
      }
      .nav-router {
        display: flex;
        justify-content: left;
        line-height: 70px;
        .router-item {
          width: 110px;
          text-align: center;  
          a {
            display:block;
            position: relative;
            width: 100%;
            height: 70px;
            color: #ff5777; 
            &.active {
              background-color: #000;
              color: #fff;
              .icon {
                display: block;
              }
            }
            .icon {
              display: none;
              width: 12px;
              height: 7px;
              position: absolute;
              bottom: -1px;
              left: 50%;
              transform: translateX(-50%);
              background-position: -226px 0;
              background-color: transparent;
            }
          } 
          &:hover {
            background-color: #000;
            cursor: pointer;
            a {
              color: #fff;
            }
          }
        }
      }
    } 
    .nav-right {
      display: flex; 
      margin-top: 19px;
      .search {
        width: 160px;
        height: 38px;
        border-radius: 20px;
        margin-right: 15px;
      }
      .center {
        border: 1px solid #959595;
        border-radius: 20px;
        text-align: center;
        background-color: #242424;
        color: #707070;
        margin-right: 15px;
        &:hover {
          border: 1px solid #ccc;
          color: #bababa;
        }
      }
      .login-btn {
        border: none;
        background-color: transparent;
        color: #707070;
        &:hover{
          color: #bababa;
        }
      }
    }
  }

  .content-line {
    height: 5px;
    background-color: #c20c0c;
  }
`










