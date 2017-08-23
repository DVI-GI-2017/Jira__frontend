import * as React from 'react';
import {Linked} from '../Linked/Linked';

import './Task.scss';

interface Props {
  day?: string;
  month?: string;
  priority: string;
  title: string;
  description?: string;
  path: string
}

export class Task extends React.Component<Props, any> {
  render() {
    const {day, month, priority, title, description, path}: any = this.props;

    return (
      <div className="column task__position">
        <div className="post-module hover">
          <div className="thumbnail">
            <div className="date">
              <div className="day">{day}</div>
              <div className="month">{month}</div>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
          </div>
          <div className="post-content">
            <div className="category">{priority}</div>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <p className="initiator__block"><span className="sub_title initiator__title">Initiator:</span>
              <span className="initiator__people">Blabla</span></p>
            <div className="post-meta">
              <Linked pathTo={path}>More</Linked>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
