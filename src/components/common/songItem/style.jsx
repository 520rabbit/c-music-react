import styled from 'styled-components';

export const SongItemWrap = styled.div`
  width: 152px;
  margin: 20px;
  &:nth-of-type(4n+4) {
    margin-right: 0;
  }
  &:nth-of-type(2n+1) {
    margin-left: 0;
  }
  .song-top {
    position: relative;
    width: 152px;
    img {
      width: 152px;
      height: 152px;
    }
    .song {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      .song-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }
  .song-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
  .song-source {
    color: #666;
  }
`
