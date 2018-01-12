import React, { Component } from 'react';
import { ToolHeader, Button } from '@procore/core-react'
import { EquipmentCard } from './EquipmentCard'

const exampleJSON = [
  {
    id: 333675,
    created_at: "2012-10-23T21:39:40.000Z",
    date: "2016-05-19",
    deleted_at: "2017-07-29T21:39:40.000Z",
    hours_idle: "2.0",
    hours_operating: "8.0",
    inspected: false,
    inspection_hour: 9,
    inspection_minute: 50,
    notes: "Equipment notes",
    position: 11241,
    updated_at: "2012-10-24T21:39:40.000Z",
    created_by: {
      id: 160586,
      login: "exampleuser@website.com",
      name: "Carl Contractor"
    },
    location: {
      id: 15504,
      name: "1space>1 space",
      node_name: "1 space",
      parent_id: 788866
    },
    cost_code: {
      id: 12345,
      name: "Earthwork"
    },
    equipment: {
      id: 15504,
      project_id: 14406,
      position: 18300,
      name: "CAT Excavator - 307 E2"
    },
    attachments: [
      {
        id: 42,
        name: "foobar",
        url: "foobar",
        filename: "foobar"
      }
    ]
  },
  {
    id: 333675,
    created_at: "2012-10-23T21:39:40.000Z",
    date: "2016-05-19",
    deleted_at: "2017-07-29T21:39:40.000Z",
    hours_idle: "2.0",
    hours_operating: "8.0",
    inspected: true,
    inspection_hour: 9,
    inspection_minute: 50,
    notes: "Equipment notes",
    position: 11241,
    updated_at: "2012-10-24T21:39:40.000Z",
    created_by: {
      id: 160586,
      login: "exampleuser@website.com",
      name: "Carl Contractor"
    },
    location: {
      id: 15504,
      name: "1space>1 space",
      node_name: "1 space",
      parent_id: 788866
    },
    cost_code: {
      id: 12345,
      name: "Earthwork"
    },
    equipment: {
      id: 15504,
      project_id: 14406,
      position: 18300,
      name: "CAT Mining Truck - 785D"
    },
    attachments: [
      {
        id: 42,
        name: "foobar",
        url: "foobar",
        filename: "foobar"
      }
    ]
  },
  {
    id: 333675,
    created_at: "2012-10-23T21:39:40.000Z",
    date: "2016-05-19",
    deleted_at: "2017-07-29T21:39:40.000Z",
    hours_idle: "2.0",
    hours_operating: "8.0",
    inspected: false,
    inspection_hour: 9,
    inspection_minute: 50,
    notes: "Equipment notes",
    position: 11241,
    updated_at: "2012-10-24T21:39:40.000Z",
    created_by: {
      id: 160586,
      login: "exampleuser@website.com",
      name: "Carl Contractor"
    },
    location: {
      id: 15504,
      name: "1space>1 space",
      node_name: "1 space",
      parent_id: 788866
    },
    cost_code: {
      id: 12345,
      name: "Earthwork"
    },
    equipment: {
      id: 15504,
      project_id: 14406,
      position: 18300,
      name: "CAT Dozer - D6K2"
    },
    attachments: [
      {
        id: 42,
        name: "foobar",
        url: "foobar",
        filename: "foobar"
      }
    ]
  }
];
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
