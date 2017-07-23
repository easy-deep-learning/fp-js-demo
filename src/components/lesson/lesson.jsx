import React from 'react'
import PropTypes from 'prop-types'

import { CodeEditor } from '../../components/'

const code = {}

const Lesson = ({ data }) => {
  const {
    title,
    theory,
    practice,
    links,
    id
  } = data

  return (
    <div className="Lesson">
      <h2 className="Lesson__title">
        Урок #{id}: {title}
      </h2>

      <div className="Lesson__theory">
        {theory}
      </div>

      <div className="Lesson__practice">
        Практика
        practice
        <div className="Lesson__code">
          {/*<CodeEditor code={getFunctionBody(code)} />*/}
        </div>
      </div>

      <div className="Lesson__link">

      </div>

    </div>
  )
}

Lesson.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  theory: PropTypes.any,
  practice: PropTypes.any,
  links: PropTypes.any
}

export default Lesson
