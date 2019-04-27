import React, { Component } from "react"
import { Button, Grid } from "semantic-ui-react"

class EditForm extends Component {
  state = {
    components: [],
    selectedComponent: '',
    componentData: {}
  }

  async componentDidMount() {
    this.setState({
      components: await this.getComponents()
    })
  }

  async getComponents() {
    /* Make a query to DB to return all the components, returning hardcoded values for now. */
    return ["Home", "Home-Items", "Menu", "Resources", "Team"]
  }

  renderComponents() {
    const componentSelectors = ((arr, size) => {
      const renderGrid = []
      for (let i = 0; i < arr.length; i += size) {
        const subArray = arr.slice(i, i + size)
        const rowButtons = subArray.map((component, id) =>
          <Grid.Column mobile={12} computer={4} key={id}>
            <Button floated="left" onClick={() => this.selectComponent(component)} > {component} </Button>
          </Grid.Column>
        )
        renderGrid.push(
          <Grid.Row key={"grid_row_" + renderGrid.length + 1}>
            {rowButtons}
          </Grid.Row>
        )
      }
      return renderGrid
    })(this.state.components, 3)
    return (
      <Grid column='equal' centered>
        {componentSelectors}
      </Grid>
    )
  }

  async getComponentData(component) {
    /* Retrieve JSON from the DB for the selected component. */
    return {}
  }

  async selectComponent(component) {
    this.setState({
      selectedComponent: component,
      componentData: await this.getComponentData(component)
    })
  }

  render() {
    if (!this.state.selectedComponent) {
      return (
        <div>
          <br />
          <h3 style={{ "textAlign": "center" }}>Select the Component to Modify</h3>
          <br /><br />
          {this.renderComponents()}
        </div>
      )
    } else {
      return (
        <form>
          <div>Work in Progress!</div>
          <button onClick={() => { window.location.pathname = "/edit" }}>Go Back to Components</button>
        </form>
      )
    }
  }
}

export default EditForm