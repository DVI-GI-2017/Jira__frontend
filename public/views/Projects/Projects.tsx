import * as React from 'react';

import Background from '../../components/Background/Background';
import Information from '../../components/Information/Information';

export class Projects extends React.Component<any, any> {
  render() {
    return (
      <div className='wrapper__mobile'>
        <Background closed={ false }/>
        <Information>
          <span className='developer'>Jira</span>
          <p className='sorry'>Hi</p>
        </Information>
      </div>
    );
  }
}
