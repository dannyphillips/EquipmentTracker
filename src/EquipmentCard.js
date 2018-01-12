import React, { Component } from 'react';
import { Card, Token } from '@procore/core-react'
import styled from 'styled-components'

const ECard = styled(Card)`
  padding: 10px;
  margin: 10px;
  display: inline-block;
  min-width: 300px;
`;
const Title = styled.h2`
  text-align: center;
`;
const Image = styled.img`
  text-align: center;
`;
const bgToken = ({ inspected }) => {
 return (inspected === "true") ? 'green' : 'red';
};
const InspectedToken = styled(Token)`
  background-color: ${bgToken};
  height: 19px;
`;
const DateField = styled.span`
  float: right;
`;

const images = {
  Dozer: "http://s7d2.scene7.com/is/image/Caterpillar/C10759303?$cc-g$",
  Truck: "http://s7d2.scene7.com/is/image/Caterpillar/C833062?$cc-g$",
  Excavator: "http://s7d2.scene7.com/is/image/Caterpillar/C10682189?$cc-g$",
};

export class EquipmentCard extends Component {
  getImage(equipment) {
    let image = null;
    Object.keys(images).map(function(key, index) {
      if (equipment.name.includes(key)) {image = images[key]}
      return images[key]
    });
    return image;
  }

  render() {
    const { equipment, inspected, date } = this.props.data;
    return <ECard>
        <Title>{equipment.name}</Title>
        <Image src={this.getImage(equipment)} width="200" alt="" />
        <div>
          <InspectedToken inspected={inspected.toString()}>
            <Token.Label>
              {inspected ? "Inspected" : "Needs Inspection"}
            </Token.Label>
          </InspectedToken>
          <DateField>{date}</DateField>
        </div>
      </ECard>;
  }
}