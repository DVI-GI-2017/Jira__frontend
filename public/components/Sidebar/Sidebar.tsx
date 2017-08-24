import * as React from 'react';
import {connect} from 'react-redux';

import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getProjects, setCurrentProjects, setProjects} from '../../actions/Project/Project.actions';

import './Sidebar.scss';

interface Props {
  isAuthenticated: boolean;
  projects: Array<any>;
  project: any;
  getProjectsList: () => void;
  setProject: (any) => void;
}

class Sidebar extends React.Component<Props, any> {
  componentWillMount() {
    this.props.getProjectsList();
  }

  render() {
    const {projects}: any = this.props.projects;

    const projectsRender: any = projects.map((item, index) => {
      return (
        <div onClick={this.props.setProject.bind(this, item)} key={index}>
          <p className="w3-bar-item w3-button">{item.title}</p>
        </div>
      );
    });

    return (
      <div className="w3-sidebar w3-light-grey w3-bar-block left__navbar">
        {projectsRender}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.authentication.isAuthenticated,
    projects: state.projects
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProjectsList: async () => {
      dispatch(togglePreloader());

      const result = await getProjects();
      const project = await result.json();

      dispatch(setProjects(project));
      dispatch(setCurrentProjects(project[0]));
      dispatch(togglePreloader());
    },
    setProject: async (project: any) => {
      dispatch(togglePreloader());
      dispatch(setCurrentProjects(project));
      dispatch(togglePreloader());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar as any);
