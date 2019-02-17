import React, { Component } from "react";

export default [{
  name: 'Cpp Image',
  render: (
    <Card fluid>
      <Card.Content>
        <Card.Header>C++ Image</Card.Header>
        <Card.Meta>
          <span>Status: Ongoing</span>
        </Card.Meta>
        <Card.Description>NYU's C++ developement environment</Card.Description>
      </Card.Content>
    </Card>
  )
},{
  name: 'PL Image',
  render: (
    <Card fluid>
      <Card.Content>
        <Card.Header>Programming Languages Image</Card.Header>
        <Card.Meta>
          <span>Status: Ongoing</span>
        </Card.Meta>
        <Card.Description>Environment containing several languages pre-installed.</Card.Description>
      </Card.Content>
    </Card>
  )
},{
  name: 'Distributed Image',
  render: (
    <Card fluid>
      <Card.Content>
        <Card.Header>Distributed Computing Image</Card.Header>
        <Card.Meta>
          <span>Status: Coming Soon</span>
        </Card.Meta>
        <Card.Description>Environment for getting your hands dirty with distributed computing.</Card.Description>
      </Card.Content>
    </Card>
  )
},{
  name: 'OS Image',
  render: (
    <Card fluid>
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