import * as React from 'react';

export class HeaderBase extends React.Component<any, any> {
  render() {
    return (
      <div className='header'>
        { this.props.children }
      </div>
    );
  }
}
