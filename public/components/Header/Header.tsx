import * as React from 'react';

import {HeaderBase} from './HeaderBase/HeaderBase';
import {HeaderTeam} from './HeaderTeam/HeaderTeam';
import HeaderNav from './HeaderNav/HeaderNav';

import './Header.scss';

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
