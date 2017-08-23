import * as React from 'react';
import {Content} from '../../components/Content/Content';
import {Task} from '../../components/Task/Task';

import './Projects.scss';

export class Projects extends React.Component<any, any> {
  render() {
    return (
      <Content>
        <div className="w3-container">
          <h1 className="center-align projects__text-description">Description</h1>
          <p className="left-align projects__text-description-text projects__top">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
            eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
            feugait nulla facilisi.
          </p>
        </div>

        <div className="w3-container projects__top projects__text-tasks">
          <h1 className="center-align projects__text-description">Tasks</h1>
          <div className="projects__top">
            <div className="w3-row">
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  To do 6
                </p>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
              </div>
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  In progress 2
                </p>
                <Task/>
              </div>
              <div className="w3-col w3-container m4 l4">
                <p className="center-align text__decorator projects__text">
                  Done 145
                </p>
                <Task/>
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}
