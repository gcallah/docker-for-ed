import React from "react";
import { Card, Button, Modal, Header, List } from "semantic-ui-react";
import * as data from "../data/homeitems.json";

const homeItems = data.items.map((item, idx) => {
  return (
    <Card fluid key={"card_" + (idx)}>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span>Status: {item.status}</span>
        </Card.Meta>
        <Card.Description>{item.description}</Card.Description>
        {item.details &&
          <Modal size={'tiny'} trigger={<Button floated="right" primary basic>Details</Button>}>
            <Modal.Header>{item.name} Details</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Instructions</Header>
                <List bulleted>
                  {item.details.instructions.map((instruction, instrIdx) => <List.Item key={"card_" + (idx) + "_instr_" + (instrIdx)}>{instruction}</List.Item>)}
                </List>
                <Header>Download</Header>
                <Button target="_blank" href={item.details.downloadButton.link} primary>{item.details.downloadButton.text}</Button>
                <br />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        }
      </Card.Content>
    </Card>
  )
});

export default homeItems;