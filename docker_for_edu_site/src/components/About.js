import React, { Component } from "react";
import { Loader, Dimmer, Grid } from "semantic-ui-react";

class About extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = "Docker For Edu | About";
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
          <Grid.Column mobile={16} computer={16}>
            <h2>About This Site</h2>
            <p>This is a website set up at the NYU Tandon School of Engineering, intended to forward using Docker in education.</p>
          </Grid.Column>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default About;