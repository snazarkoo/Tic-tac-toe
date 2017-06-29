import React from 'react';
import ControlPanel from './ControlPanel';
import Grid from './Grid';

class App extends React.Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <Grid />
      </div>
    );
  }
}

export default App;
