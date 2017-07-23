import React, { Component } from 'react'

import { getAll } from './lessons-list-container.api'
import { LessonThumb } from '../../components'
import './lessons-list-container.css'

class LessonListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    getAll()
      .then(data => {
        this.setState({
          lessons: data
        })
      })
  }

  render() {
    return (
      <div className="LessonListContainer">
        <ul>
          {this.state.lessons.map(lesson => (
            <li key={lesson.id}>
              <LessonThumb
                title={lesson.title}
                url={lesson.id}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default LessonListContainer
