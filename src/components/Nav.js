import React from 'react';
import logo from '../images/logo.svg';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-transparent bg-white my-2 position-fixed w-100">
      <img src={logo} alt='logoImg' className="navbar-brand"></img>
      <button className="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon h2"></span>
      </button>

      <div className="collapse navbar-collapse bg-darkPrimary text-center mt-3 mx-4 py-3" id="navbarSupportedContent" style={{ borderRadius: '10px' }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">Features <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" tabIndex="-1" >Resources</a>
          </li>
          <div className="dropdown-divider"></div>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" tabIndex="-1" >Login</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-primary my-2 my-sm-0 mx-auto w-75" type="submit">Sing Up</button>
        </form>
      </div>
    </nav>
  )
}
export default Nav
