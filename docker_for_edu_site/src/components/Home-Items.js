import React from "react";
import { Card, Button, Modal, Header, List } from "semantic-ui-react";

export default [{
  name: 'Cpp Image',
  render: (
    <Card fluid key={1}>
      <Card.Content>
        <Card.Header>C++ Image</Card.Header>
        <Card.Meta>
          <span>Status: Ongoing</span>
        </Card.Meta>
        <Card.Description>NYU's C++ developement environment</Card.Description>
        <Modal size={'tiny'} trigger={<Button floated="right" primary basic>Details</Button>}>
          <Modal.Header>C++ Image Details</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Instructions</Header>
              <List bulleted>
                <List.Item>Create a course directory</List.Item>
                <List.Item>Download Makefile below (save as 'Makefile' without any extension)</List.Item>
                <List.Item>Place the file in the course dir</List.Item>
                <List.Item>Open terminal inside the course dir</List.Item>
                <List.Item>Run 'make run-interactive'</List.Item>
              </List>
              <Header>Downloads</Header>
              <Button target="_blank" href={"https://raw.githubusercontent.com/vutsalsinghal/docker-for-ed/master/docker_images/cpp/Makefile"} primary>Makefile</Button>
              <br />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  )
}, {
  name: 'PL Image',
  render: (
    <Card fluid key={2}>
      <Card.Content>
        <Card.Header>Programming Languages Image</Card.Header>
        <Card.Meta>
          <span>Status: Ongoing</span>
        </Card.Meta>
        <Card.Description>Environment containing several languages pre-installed.</Card.Description>
        <Modal size={'tiny'} trigger={<Button floated="right" primary basic>Details</Button>}>
          <Modal.Header>Programming Languages Image Details</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Instructions</Header>
              <List bulleted>
                <List.Item>Create a course directory</List.Item>
                <List.Item>Download Makefile below (save as 'Makefile' without any extension)</List.Item>
                <List.Item>Place the file in the course dir</List.Item>
                <List.Item>Open terminal inside the course dir</List.Item>
                <List.Item>Run 'make run-interactive'</List.Item>
              </List>
              <Header>Downloads</Header>
              <Button target="_blank" href={"https://raw.githubusercontent.com/vutsalsinghal/docker-for-ed/master/docker_images/pl/Makefile"} primary>Makefile</Button>
              <br />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  )
}, {
  name: 'Distributed Image',
  render: (
    <Card fluid key={3}>
      <Card.Content>
        <Card.Header>Distributed Computing Image</Card.Header>
        <Card.Meta>
          <span>Status: Coming Soon</span>
        </Card.Meta>
        <Card.Description>Environment for getting your hands dirty with distributed computing.</Card.Description>
      </Card.Content>
    </Card>
  )
}, {
  name: 'OS Image',
  render: (
    <Card fluid key={4}>
      <Card.Content>
        <Card.Header>Operating Systems Course Image</Card.Header>
        <Card.Meta>
          <span>Status: Coming Soon</span>
        </Card.Meta>
        <Card.Description>Environment for Xv6 environment</Card.Description>
      </Card.Content>
    </Card>
  )
}]