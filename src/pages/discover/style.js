import styled from 'styled-components'

export const DiscoverWrap = styled.div`
  .header {
    height: 30px;
    background-color: #c20c0c;
    .nav {
      padding-left: 176px;
      box-sizing: border-box;
      display: flex;
      .nav-item {
        width: 110px;
        text-align: center;
        a {
          color: #fff;
          font-size: 14px;
          &:hover, &.active {
            display: inline-block;
            padding: 0 10px;
            border-radius: 20px;
            box-sizing:border-box;
            margin: auto;
            text-align: center; 
            background-color: rgba(000,000,000,.2)
          } 
        }
      }
    }
  } 
`