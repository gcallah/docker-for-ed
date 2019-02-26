import React, { Component } from "react";
import { Loader, Dimmer, Grid, List } from "semantic-ui-react";
import * as data from "../data/resources.json";

class Resources extends Component {
  state = {
    msg: '',
    loadingData: false,
  }

  async componentDidMount() {
    this.setState({ loadingData: true });
    document.title = data.title;
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
    const sections = data.items.map(section => {
      return (
        <div key={"resources_section_" + section.sectionId}>
          {section.subheading && <h3>{section.subheading}</h3>}
          <List bulleted>
            {section.content.map((resource, idx) => <List.Item key={"resources_section_" + section.sectionId + "_link_" + idx} href={resource.link}>{resource.text}</List.Item>)}
          </List>
          <br />
        </div>
      )
    })

    return (
      <div>
        <Grid stackable reversed="mobile">
          <Grid.Column mobile={16} computer={8}>
            <h2>Resources</h2>
            {sections}
          </Grid.Column>
        </Grid>

        <br /><br />
      </div>
    );
  }
}

export default Resources;