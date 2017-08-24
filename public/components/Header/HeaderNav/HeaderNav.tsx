import * as React from 'react';
import {Linked} from '../../Linked/Linked';
import {browserHistory} from 'react-router';

export class HeaderNav extends React.Component<any, any> {
  render() {
    return (
      <div className='header__wrapper__help'>
        <ul className='ul__class'>
          <li className='li__class'><Linked pathTo='/projects'><p>Projects</p></Linked></li>
          <li className='li__class'><Linked pathTo='/tasks'><p>Tasks</p></Linked></li>
          <li className='li__class' onClick={this.logout}><p>Logout</p></li>
        </ul>
      </div>
    );
  }

  private logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }

    browserHistory.push('/');
  }
}
