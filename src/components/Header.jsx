import React from 'react';
import About from './About';
import "../styles/Style.css"

class Header extends React.Component {
  render() {
    return (
      <header >
        <div className="Header-container__img">
          <img src="https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png" alt="Logo Platzi" />
        </div>
        <div className="Header-container__data">
          <h1 className='Header-title'>Melissa Walsh</h1>
          <p className='Header-job-title'>FrontEnd Developer</p>
        </div>
      </header>
    );
  }

}

export default Header;
