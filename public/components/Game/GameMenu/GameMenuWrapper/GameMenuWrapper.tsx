import * as React from 'react';

import './GameMenuWrapper.scss';

export class GameMenuWrapper extends React.Component<any, any> {
  render() {

    return (
      <div className='menu__wrapper__parent'>
        <div className='menu__wrapper__parent-center'>
          <div className='menu'/>
        </div>
      </div>
    );
  }
}
