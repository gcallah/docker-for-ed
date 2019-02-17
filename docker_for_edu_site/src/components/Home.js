import React, { Component } from "react";
import { Loader, Dimmer, Grid } from "semantic-ui-react";

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
        <Grid stackable reversed="mobile">
          <Grid.Column mobile={16} computer={8}>
            Hello World!
          </Grid.Column>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default Home;