import React from 'react'
import {
  Router,
  Route,
  Redirect,
  hashHistory
} from 'react-router'

import ToDo from '../to-do/ToDo'
import About from '../about/About'

export default props => (
  <Router history={ hashHistory }>
    <Route path='/todos' component={ ToDo } />
    <Route path='/about' component={ About } />
    <Redirect from='*' to='/todos' />
  </Router>
)
