import * as React from 'react';

import {HeaderBase} from './HeaderBase/HeaderBase';
import {HeaderTeam} from './HeaderTeam/HeaderTeam';

import './Header.scss';
import {HeaderNav} from './HeaderNav/HeaderNav';

export class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderBase>
        <HeaderNav/>
        <HeaderTeam/>
      </HeaderBase>
    );
  }
}
