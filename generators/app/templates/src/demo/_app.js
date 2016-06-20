import React from 'react';
import { render } from 'react-dom';

import <%= componentName %> from '../<%= className %>';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>Hello from React with hot reload!</div>
        <<%= componentName %> />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
