import * as React from 'react';
import {connect} from 'react-redux';

import {Linked} from '../Linked/Linked';

import './Sidebar.scss';

interface Props {
  isAuthenticated: boolean;
}

class Sidebar extends React.Component<Props, any> {
  render() {
    return (
      <div className="w3-sidebar w3-light-grey w3-bar-block left__navbar">
        <Linked pathTo="/projects">
          <p className="w3-bar-item w3-button">Project1</p>
        </Linked>
        <Linked pathTo="/tasks">
          <p className="w3-bar-item w3-button">Project2</p>
        </Linked>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  }
};

export default connect(mapStateToProps)(Sidebar as any);
