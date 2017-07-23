import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getById } from './lesson-container.api'
import { Lesson } from '../../components'

class LessonContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lesson: {}
    }
  }

  componentDidMount() {
    getById(this.props.lessonId)
      .then(data => {
        this.setState({
          lesson: data
        })
      })
  }

  render() {
    return (
      <div className="LessonContainer">
        <Lesson data={this.state.lesson} />
      </div>
    )
  }
}

LessonContainer.propTypes = {
  lessonId: PropTypes.string
}

export default LessonContainer
