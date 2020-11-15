import styled from 'styled-components'

export const RecommendWrap = styled.div`
  width: 100%auto;
  background: #ff5777;
  .content {
    display: flex;
    background: #fff;
    .content-left {
      width: 750px;
      padding: 20px;
      box-sizing: border-box;
      border-left: 1px solid #aaa;
      border-right: 1px solid #aaa;
    }
    .content-right {
      flex: 1;
      .login {
        padding: 20px;
        box-sizing: border-box;
        background: linear-gradient(#fff, #e9e9e9);
        border-bottom: 1px solid #c9c9c9;
        p {
          font-size: 14px;
          color: #606060;
        }
        .login-btn {
          background: #D51218;
          color: #fff;
          display: block;
          margin: auto;
          &:hover {
            opacity: .9;
            border-color: #e9e9e9;
          }
          &:active {
            opacity: .7;
            border-color: #e9e9e9;
          }
          &:link {
            opacity: .7;
            border-color: #e9e9e9;
          }
        }
      }
    }
  }
`