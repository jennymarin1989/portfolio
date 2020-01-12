import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ tag: Tag, className, text }) => {
  return (
    <div>
      <Tag className={className}>
        {text}
      </Tag>
    </div>
  )
}


export default Header

Header.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}