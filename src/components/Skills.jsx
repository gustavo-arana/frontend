import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2 className='Skills-title'>Skills</h2>
        <ul>
          <li className='Skills-item'>HTML5 <span className="Skills__percent">75 %</span></li>
          <li className='Skills-item'>CSS <span className="Skills__percent">25 %</span></li>
          <li className='Skills-item'>JavaScript <span className="Skills__percent">55 %</span></li>
          <li className='Skills-item'>React <span className="Skills__percent">90 %</span></li>
        </ul>
      </div>
    );
  }

}

export default Skills;
