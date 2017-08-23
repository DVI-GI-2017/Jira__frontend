import * as React from 'react';

import {HeaderBase} from './HeaderBase/HeaderBase';
import {HeaderTeam} from './HeaderTeam/HeaderTeam';

import './Header.scss';

export class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderBase>
        <HeaderTeam/>
      </HeaderBase>
    );
  }
}
