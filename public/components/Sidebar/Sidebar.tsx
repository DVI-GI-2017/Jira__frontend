import * as React from 'react';
import {Linked} from '../Linked/Linked';

import './Sidebar.scss';

export class Sidebar extends React.Component<any, any> {
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
