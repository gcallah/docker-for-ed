import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import setupMenu from './Header';

class Layout extends Component {
  state = {
    loadingData: true,
    Header: {}
  }

  async componentDidMount() {
    const Header = await setupMenu()
    this.setState({ Header, loadingData: false })
  }

  render() {
    if (this.state.loadingData) {
      return (<div>{this.props.children}</div>)
    }
    return (
      <Container>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        { this.state.Header }
        {this.props.children}
      </Container>
    );
  }

}

export default Layout