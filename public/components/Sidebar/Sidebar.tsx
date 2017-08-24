import * as React from 'react';
import {connect} from 'react-redux';

import {Linked} from '../Linked/Linked';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {getProjects, setProjects} from '../../actions/Project/Project.actions';

import './Sidebar.scss';

interface Props {
  isAuthenticated: boolean;
  projects: Array<any>;
  getProjectsList: () => void;
}

class Sidebar extends React.Component<Props, any> {
  componentWillMount() {
    this.props.getProjectsList();
  }

  render() {
    const {projects}: any = this.props.projects;

    const projectsRender: any = projects.map((item, index) => {
      return (
        <Linked pathTo="/projects" key={index}>
          <p className="w3-bar-item w3-button">{item.title}</p>
        </Linked>
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

      dispatch(setProjects(await result.json()));
      dispatch(togglePreloader());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar as any);
