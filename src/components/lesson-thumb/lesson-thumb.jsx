import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LessonThumb = ({ url, title }) => (
  <div className="LessonThumb">
    <p><Link to={`/lessons/${url}`}>{title}</Link></p>
  </div>
)

LessonThumb.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default LessonThumb
