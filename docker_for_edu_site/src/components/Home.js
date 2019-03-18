import React, { Component } from "react";
import { Loader, Dimmer, Grid } from "semantic-ui-react";
import homeItems from "./Home-Items";
import * as data from "../data/home.json";

class Home extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = data.title;
    this.setState({ loadingData: false });
  }

  renderItems = () => {
    const itemComponents = ((arr, size) => {
      const renderGrid = []
      for (var i = 0; i < arr.length; i += size) {
        const subArray = arr.slice(i, i + size)
        const rowItems = subArray.map((item, id) =>
          <Grid.Column key={id} mobile={16} computer={8}>
            {item}
          </Grid.Column>
        )
        renderGrid.push(
          <Grid.Row key={"grid_row_" + renderGrid.length + 1}>
            {rowItems}
          </Grid.Row>
        )
      }
      return renderGrid
    })(homeItems, 2)

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
        <h1 style={{ "textAlign": "center" }}>{data.heading}</h1>
        <br /><br />
        {this.renderItems()}
        <br /><br />
      </div>
    );
  }
}

export default Home;