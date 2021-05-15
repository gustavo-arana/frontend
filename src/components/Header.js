import React from 'react';
import About from './About';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          Logo
        </div>
        <div>
          <h1 className="Header-title">Header title</h1>
          <p className="Header-job-title">Header-job-title</p>
          <About />
        </div>
      </header>
    );
  }

}

export default Header;
