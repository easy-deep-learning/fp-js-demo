import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  LessonRoute,
  NotFoundRoute
} from './routes/index'

const Routes = (
  <Router>
    <div className="routes">
      <Route exact path='/' component={LessonRoute} />
      <Route path='/lessons/:id' component={LessonRoute} />
      {/*<Route component={NotFoundRoute} />*/}
    </div>
  </Router>
)

export default Routes
