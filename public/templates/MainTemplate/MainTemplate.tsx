import * as React from 'react';
import { connect } from 'react-redux';

import PreLoader from '../../components/PreLoader/PreLoader';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import './MainTemplate.scss';

interface Props {
  isAuthenticated: boolean;
  device: boolean;
}

class MainTemplate extends React.Component<Props, void> {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className='wrapper'>
        <Header />
        { isAuthenticated && window.location.pathname.indexOf('projects') !== -1 && <Sidebar /> }
        <PreLoader />
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
};

export default connect(mapStateToProps)(MainTemplate);
