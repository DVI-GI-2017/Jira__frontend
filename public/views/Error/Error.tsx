import * as React from 'react';

import {Button} from '../../components/Button/Button';

import './Error.scss'

export class Error extends React.Component<any, any> {
  render() {
    return (
      <div className='wrapper__about'>
        <p className="error__text error__text-status">404!</p>
        <p className="error__text error__text-text">Not Found</p>
        <Button
          text='Go to home'
          pathTo='/'/>
      </div>
    );
  }
}
