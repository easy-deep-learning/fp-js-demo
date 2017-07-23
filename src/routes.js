import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  LessonsRoute,
  LessonRoute,
  NotFoundRoute
} from './routes/index'

const Routes = (
  <Router>
    <div className="routes">
      <Switch>
        <Route exact path='/' component={LessonsRoute} />
        <Route exact path='/lessons' component={LessonsRoute} />
        <Route path='/lessons/:id' component={LessonRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </div>
  </Router>
)

export default Routes
