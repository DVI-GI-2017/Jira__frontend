import * as React from 'react';
import {Linked} from '../../Linked/Linked';

export class HeaderNav extends React.Component<any, any> {
  render() {
    return (
      <div className='header__wrapper__help'>
        <ul>
          <li><Linked pathTo="/projects"><p>Projects</p></Linked></li>
          <li><Linked pathTo="/tasks"><p>Tasks</p></Linked></li>
          <li><Linked pathTo="/tasks"><p>Logout</p></Linked></li>
        </ul>
      </div>
    );
  }
}