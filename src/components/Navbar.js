import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div >
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/About">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Registration">Login</Link>
        </li>
       
      </ul>
      <div className="form-check form-switch form-check-reverse">
       <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckReverse"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckReverse"></label>
          </div>

    </div>
  </div>
</nav>
</div>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired ,
    aboutText:PropTypes.string
}

// default props 

Navbar.defaultProps={
    title:'Set the title',
    aboutText:'About Text Here'
}
