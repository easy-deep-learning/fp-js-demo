import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import { CodeEditor } from '../../components/'

const Lesson = ({ data }) => {
  const {
    title,
    theory = '',
    id,
    examples
  } = data

  if (!data.title) return null

  return (
    <div className="Lesson">
      <h2 className="Lesson__title">
        Урок #{id}: {title}
      </h2>

      <div className="Lesson__theory">
        <Markdown source={theory} className="markdown-body" />
      </div>

      <div className="Lesson__practice">
        Практика
        practice
        <div className="Lesson__code">
          {Object.keys(examples).map(exampleID => {

            return (
              <div className="Example" key={exampleID}>
                <h3 className="Example__header">Пример {exampleID}</h3>
                <div className="Example__code"><CodeEditor code={examples[exampleID].code} /></div>
              </div>
            )
          })}
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
