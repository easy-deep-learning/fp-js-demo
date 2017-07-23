import React from 'react'

import { LessonContainer } from '../../containers'

const LessonRoute = props => (
  <div className="LessonRoute">
    <LessonContainer lessonId={props.match.params.id}/>
  </div>
)

export default LessonRoute
