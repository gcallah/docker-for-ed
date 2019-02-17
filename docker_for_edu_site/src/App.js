import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Resources from './components/Resources';
import Team from './components/Team';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/docker-for-ed/" component={Home} />
            <Route exact path="/docker-for-ed/resources" component={Resources} />
            <Route exact path="/docker-for-ed/team" component={Team} />
            <Route exact path="/docker-for-ed/about" component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;