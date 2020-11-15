import styled from 'styled-components'

export const SettltWrap = styled.div`
  padding: 0 15px;
  .list-wrap {
    .item {
      display: flex;
      margin-top: 15px;
      .avatar {
        width: 62px;
        img {
          width: 100%
        }
      }
      .info {
        flex: 1;
        padding-left: 12px;
        background: #f5f5f5;
        .title {
          line-height: 36px;
          font-weight: 800;
          font-size: 15px;
          color: #303030;
          margin: 0;
        }
        .name {
          font-size: 13px;
          color: #989898;
          margin: 0;
        }
      }
    }
  }
`