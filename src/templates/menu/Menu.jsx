import React from 'react'

export default props => (
  <nav className='navbar navbar-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <a href='#' className='navbar-brand'>
          <i className='fa fa-check'></i> To Do Application
        </a>
      </div>

      <div id='navbar' className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li><a href='#/todos' rel='noopener noreferrer'>Tasks</a></li>
          <li><a href='#/about' rel='noopener noreferrer'>About</a></li>
        </ul>
      </div>
    </div>
  </nav>
)
