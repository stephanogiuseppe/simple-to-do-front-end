import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from './Routes'
import Menu from '../../templates/menu/Menu'

export default props => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)