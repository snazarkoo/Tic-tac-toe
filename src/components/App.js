import React from 'react';
import ControlPanel from './ControlPanel';
import GridPanel from "./GridPanel";

class App extends React.Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <GridPanel />
      </div>
    );
  }
}

export default App;
