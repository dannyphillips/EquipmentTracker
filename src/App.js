import React, { Component } from 'react';
import { ToolHeader, Tabs, Button } from '@procore/core-react'
import FileExplorer from './FileExplorerWidget'
import './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <ToolHeader>
          <ToolHeader.Section>
            <ToolHeader.Icon />
            <ToolHeader.Header>Cool Tool</ToolHeader.Header>
            <Tabs>
              <Tabs.Tab><Tabs.Link label="One" /></Tabs.Tab>
              <Tabs.Tab><Tabs.Link label="Two" /></Tabs.Tab>
              <Tabs.Tab variant="active"><Tabs.Link label="Active" /></Tabs.Tab>
            </Tabs>
          </ToolHeader.Section>
          <ToolHeader.Section>
            <Button>Upload!</Button>
          </ToolHeader.Section>
        </ToolHeader>
        <FileExplorer />
      </div>
    );
  }
}

export default App;
