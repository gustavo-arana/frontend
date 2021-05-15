import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2 className='Experience-title'>Experience</h2>
        <ul>
          <li className='Experience-item'>PugStarts <span className="Experience__date"> Jan 2020 - Present</span></li>
          <li className='Experience-item'>CatStore <span className="Experience__date"> Sept 2019 - Jan 2016</span></li>        
        </ul>
      </div>
    );
  }

}

export default Experience;
