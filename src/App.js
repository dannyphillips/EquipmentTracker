import React, { Component } from 'react';
import { ToolHeader, Button } from '@procore/core-react'
import { EquipmentCard } from './EquipmentCard'
import { exampleJSON } from './exampleJSON'

class App extends Component {
  refreshEquipment() {
    window.location.reload();
  }

  render() {
    return <div>
        <ToolHeader>
          <ToolHeader.Section>
            <ToolHeader.Icon />
            <ToolHeader.Header>Equipment Tracker</ToolHeader.Header>
          </ToolHeader.Section>
          <ToolHeader.Section>
            <Button onClick={this.refreshEquipment}>Refresh</Button>
          </ToolHeader.Section>
        </ToolHeader>
        {exampleJSON.map(equipment => (
          <EquipmentCard data={equipment} key={equipment.name} />
        ))}
      </div>;
  }
}

export default App;
