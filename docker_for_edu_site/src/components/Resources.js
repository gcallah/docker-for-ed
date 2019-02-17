import React, { Component } from "react";
import { Loader, Dimmer, Grid, List } from "semantic-ui-react";

class Resources extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Docker For Edu | Resources";
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
        <Grid stackable reversed="mobile">
          <Grid.Column mobile={16} computer={8}>
            <h2>Resources</h2>
            <List bulleted>
              <List.Item href="https://opensource.com/resources/what-docker">What is Docker?</List.Item>
              <List.Item href="https://en.wikipedia.org/wiki/Docker_(software)">Docker Wiki</List.Item>
              <List.Item href="http://www.thedevopscourse.com/devops/infra">NYU Tandon DevOps Course</List.Item>
              <List.Item href="https://www.docker.com/">Docker Home</List.Item>
              <List.Item href="https://github.com/gcallah/OnlineDevops/blob/master/docker-compose.yml">Sample Docker compose file</List.Item>
            </List>
            <h3>Git and Bash Basics</h3>
            <List bulleted>
              <List.Item href="https://gcallah.github.io/utils/unix_guide.html">gcallah.github.io/unix_guide</List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default Resources;