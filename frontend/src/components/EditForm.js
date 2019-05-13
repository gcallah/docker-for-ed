import React, { Component } from "react"
import { Button, Form, Grid, Message, Confirm } from "semantic-ui-react"
import axios from 'axios'

class EditForm extends Component {
  domain = window.location.hostname.includes('localhost') ? 'http://localhost:8000' : 'https://docker4ed.pythonanywhere.com'
  attrs = {}
  state = {
    components: [],
    selectedComponent: '',
    componentData: {},
    heading: '',
    confirmOpen: false,
    submitSuccess: false,
  }

  async componentDidMount() {
    document.title = 'Edit Components'
    this.mainScreen()
  }

  async mainScreen() {
    this.attrs = {}
    this.setState({
      components: await this.getComponents(),
      selectedComponent: '',
      componentData: {},
      heading: 'Edit Components'
    })
  }

  async getComponents() {
    const response = await axios.get(`${this.domain}/get?component=all`)
    const {result: data} = response.data
    return data.map(componentName => { return {
      "displayName": this.capitalize(componentName),
      componentName
    }})
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  renderComponents() {
    const componentSelectors = ((arr) => {
      const renderGrid = arr.map((component, id) => {
        return (
          <Grid.Row mobile={12} computer={4} key={id}>
            <Button floated="left" onClick={() => this.selectComponent(component)} > {component.displayName} </Button>
          </Grid.Row>
        )
      })
      return renderGrid
    })(this.state.components)
    return (
      <Grid column='equal' centered>
        {componentSelectors}
      </Grid>
    )
  }

  async getComponentData(component) {
    const response = await axios.get(`${this.domain}/get?component=${component}`)
    const {result: data} = response.data
    return data
  }

  handleChange(e, {name, value}) {
    this.attrs[name] = value
  }

  async selectComponent(component) {
    this.setState({
      selectedComponent: component.displayName,
      componentData: await this.getComponentData(component.componentName),
      heading: `Editing ${component.displayName} Component`
    })
  }

  iterateSubFields(subFields) {
    if(subFields.length){
      return subFields.map(field => {
        console.log("In if",field)
        return field
      })
    } else {
      console.log("In else",subFields)
    }
  }

  createForm(componentData) {
    this.attrs = componentData
    
    return Object.entries(componentData).map((attr, idx) => (
      <div key={idx}>
        <Form.Field>
          <label>{this.capitalize(attr[0])+':'}</label>
          {typeof(attr[1]) !== 'string' ?
           this.iterateSubFields(attr[1])
           :
           <Form.Input name={attr[0]} id={attr[0]} defaultValue={attr[1]} onChange={this.handleChange} />
          }
        </Form.Field>
        <br />
      </div>
    )
    )
  }

  confirm() {
    this.setState({
      confirmOpen: true
    })
  }

  closeConfirm() {
    this.setState({
      confirmOpen: false
    })
  }

  async submitData() {
    this.setState({
      confirmOpen: false
    })
    console.log(this.attrs)
    this.setState({
      submitSuccess: true
    })
  }

  render() {
    if (!this.state.selectedComponent) {
      return (
        <div>
          <br />
          <h1 style={{ "textAlign": "center" }}>{this.state.heading}</h1>
          <br />
          <h3 style={{ "textAlign": "center" }}>Select the Component to Modify</h3>
          <br /><br />
          {this.renderComponents()}
        </div>
      )
    } else {
      return (
        <div>
          <Confirm
            header={`This will change the ${this.state.selectedComponent} Component!`}
            content={`Are you sure you want to make this change?`}
            confirmButton={`Yes`}
            open={this.state.confirmOpen} 
            onCancel={() => this.closeConfirm()} 
            onConfirm={()=> this.submitData()} 
          />
          <br />
          <h1 style={{ "textAlign": "center" }}>{this.state.heading}</h1>
          <Form success>
          {this.createForm(this.state.componentData)}
          {this.state.submitSuccess && <Message success header='Component Modified!' content="Please check the website to see if the changes have reflected." />}
          <Button type="submit" onClick={() => this.confirm()} >Submit</Button>
          <Button onClick={() => this.mainScreen()}>Go Back</Button>
          </Form>
        </div>
      )
    }
  }
}

export default EditForm