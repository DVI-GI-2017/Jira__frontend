import * as React from 'react';

import './Content.scss';

export class Content extends React.Component<any, any> {
  render() {
    return (
      <div className='content__wrapper'>
        { this.props.children }
      </div>
    );
  }
}
