import React, { Component } from "react";
import { Loader, Dimmer, Grid, List } from "semantic-ui-react";

class Team extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Docker For Edu | Team";
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
            <h2>Team</h2>
            <List bulleted>
              <List.Item href="https://github.com/gcallah">Prof. Eugene Callahan</List.Item>
              <List.Item href="https://github.com/vutsalsinghal">Vutsal Singhal</List.Item>
              <List.Item>Karan Mehta</List.Item>
              <List.Item>Ujjawal Gupta</List.Item>
              <List.Item>Praphulla Bhawsar</List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default Team;