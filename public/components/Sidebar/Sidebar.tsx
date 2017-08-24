import * as React from 'react';
import {connect} from 'react-redux';

import {Linked} from '../Linked/Linked';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getProjects} from '../../actions/Project/Project.actions';

import './Sidebar.scss';

interface Props {
  isAuthenticated: boolean;
  projects: Array<any>;
  getProjectsList: () => void;
}

class Sidebar extends React.Component<Props, any> {
  render() {
    this.props.getProjectsList();

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
    isAuthenticated: state.authentication.isAuthenticated,
    projects: state.prejects
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProjectsList: async () => {
      dispatch(togglePreloader());

      const result = await getProjects();

      console.log((await result.json()));

      dispatch(togglePreloader());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar as any);
