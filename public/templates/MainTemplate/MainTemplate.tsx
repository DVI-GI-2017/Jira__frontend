import * as React from 'react';
import { connect } from 'react-redux';

import {Logo} from '../../components/Logo/Logo';
import PreLoader from '../../components/PreLoader/PreLoader';
import {Header} from '../../components/Header/Header';

import './MainTemplate.scss';

interface Props {
  isAuthenticated: boolean;
  device: boolean;
}

class MainTemplate extends React.Component<Props, void> {
  render() {
    return (
      <div className='wrapper'>
        <Header />
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
