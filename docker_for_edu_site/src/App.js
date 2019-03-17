import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Resources from './components/Resources';
import Team from './components/Team';
import About from './components/About';
import EditForm from './components/EditForm';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/about" component={About} />
            <Route exact path="/edit" component={EditForm} />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;