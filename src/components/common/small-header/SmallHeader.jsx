import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SmallHeaderWrap } from './style.jsx'

const SmallHeader = memo(function (props) {
  const { title, more } = props
  return (
    <SmallHeaderWrap>
      <div className="title"> {title} </div>
      <a className="more" href="/aaa">{more}</a>
    </SmallHeaderWrap>
  )
})

SmallHeader.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default SmallHeader