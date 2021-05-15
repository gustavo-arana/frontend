import React from 'react';

class Languages extends React.Component {
  render() {
    return (
      <div>
        <h2 className='Languages-title'>Languages</h2>
        <ul>
          <li className='Languages-item'>Spanish <span className="Languages-percent">90 %</span></li>
          <li className='Languages-item'>English <span className="Languages-percent">50 %</span></li>          
        </ul>
      </div>
    );
  }

}

export default Languages;
