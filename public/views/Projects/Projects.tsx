import * as React from 'react';
import {Linked} from '../../components/Linked/Linked';
import {Content} from '../../components/Content/Content';

export class Projects extends React.Component<any, any> {
  render() {
    return (
      <Content>
        <div className="w3-container">
          <h1 className="center-align tasks__text-description">Description</h1>
          <p>Top project</p>
        </div>

        <div className="w3-container">
          <h1 className="center-align">Задачи</h1>
          <p className="center-align text__decorator tasks__text">
            <Linked pathTo="/tasks?filter=current">Текущих задач 6</Linked>
          </p>
          <p className="center-align text__decorator tasks__text">
            <Linked pathTo="/tasks?filter=work">В работе 2</Linked>
          </p>
          <p className="center-align text__decorator tasks__text">
            <Linked pathTo="/tasks?filter=closed">Завершено 145</Linked>
          </p>
        </div>
      </Content>
    );
  }
}
