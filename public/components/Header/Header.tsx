import * as React from 'react';
import {connect} from 'react-redux';

import {HeaderBase} from './HeaderBase/HeaderBase';
import {HeaderTeam} from './HeaderTeam/HeaderTeam';
import HeaderNav from './HeaderNav/HeaderNav';

import './Header.scss';

interface Props {
  isAuthenticated: boolean;
}

class Header extends React.Component<Props, any> {
  render() {
    const {isAuthenticated} = this.props;

    return (
      <HeaderBase>
        {isAuthenticated && <HeaderNav/>}
        <HeaderTeam/>
      </HeaderBase>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
};

export default connect(mapStateToProps)(Header);
