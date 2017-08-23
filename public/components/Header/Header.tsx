import * as React from 'react';

import {HeaderBase} from './HeaderBase/HeaderBase';
import {HeaderTeam} from './HeaderTeam/HeaderTeam';

import './Header.scss';
import {HeaderHelp} from './HeaderHelp/HeaderHelp';

export class Header extends React.Component<any, any> {
  render() {
    return (
      <HeaderBase>
        <HeaderHelp/>
        <HeaderTeam/>
      </HeaderBase>
    );
  }
}
