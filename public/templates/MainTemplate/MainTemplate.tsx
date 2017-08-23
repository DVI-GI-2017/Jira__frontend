import * as React from 'react';
import { connect } from 'react-redux';

import {Logo} from '../../components/Logo/Logo';
import PreLoader from '../../components/PreLoader/PreLoader';
import {Header} from '../../components/Header/Header';
import UserBlock from '../../components/UserBlock/UserBlock';

import './MainTemplate.scss';

interface Props {
  isAuthenticated: boolean;
  device: boolean;
}

class MainTemplate extends React.Component<Props, void> {
  render() {
    const { isAuthenticated, device } = this.props;

    return (
      <div className='wrapper'>
        <Header />
        { isAuthenticated && <UserBlock /> }
        <PreLoader />
        <Logo />
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    device: state.device
  }
};

export default connect(mapStateToProps)(MainTemplate);
