import React, { Component } from "react";
import { Loader, Dimmer, Grid } from "semantic-ui-react";
import homeItems from "./Home-Items";

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

  renderItems = () => {
    let itemComponents = [];

    for (var i = 0; i < homeItems.length; i = i + 2) {
      itemComponents.push(
        <Grid.Row key={i}>
          <Grid.Column mobile={16} computer={8}>
            {homeItems[i].render}
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            {homeItems[i + 1].render}
          </Grid.Column>
        </Grid.Row>
      );
    }

    return (
      <Grid stackable centered>
        {itemComponents}
      </Grid>
    );
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
        <br />
        <h1 style={{ "text-align": "center" }}>Welcome to Docker For Education</h1>
        <br /><br />
        {this.renderItems()}
        <br /><br />
      </div>
    );
  }
}

export default Home;