import React, { Component } from "react";
import { Loader, Dimmer, Grid, Card } from "semantic-ui-react";

class Home extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Docker For Edu";
    this.setState({ loadingData: false });
  }

  render() {
    if (this.state.loadingData) {
      return (
        <Dimmer active inverted>
          <Loader size='massive'>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <div>
        <h1>Welcome to Docker For Education</h1>
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>C++ Image</Card.Header>
                  <Card.Meta>
                    <span>Status: Ongoing</span>
                  </Card.Meta>
                  <Card.Description>NYU's C++ developement environment</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Programming Languages Image</Card.Header>
                  <Card.Meta>
                    <span>Status: Ongoing</span>
                  </Card.Meta>
                  <Card.Description>Environment containing several languages pre-installed.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Distributed Computing Image</Card.Header>
                  <Card.Meta>
                    <span>Status: Coming Soon</span>
                  </Card.Meta>
                  <Card.Description>Environment for getting your hands dirty with distributed computing.</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Operating Systems Course Image</Card.Header>
                  <Card.Meta>
                    <span>Status: Coming Soon</span>
                  </Card.Meta>
                  <Card.Description>Environment for Xv6 environment</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default Home;