import React from 'react'
import { CodeEditor } from '../../components/'

import getFunctionBody from '../../helpers/get-function-body'

import { code } from '../../data/lesson-1/code'

import './lesson.css'

const LessonRoute = props => (
  <div className="Lesson">
    {console.log("getFunctionBody(code): ", getFunctionBody(code))}
    <div className="Lesson__theory">
      Теория по уроку
    </div>

    <div className="Lesson__practice">
      Практика
      <div className="Lesson__code">
        <CodeEditor code={getFunctionBody(code)} />
      </div>
    </div>

    <div className="Lesson__link">
      Ссылки
    </div>

  </div>
)

export default LessonRoute
