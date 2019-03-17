import React, { Component } from "react"
// import { Loader, Dimmer, Grid } from "semantic-ui-react"

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
        /* Make a query to DB to return all the components. */
        return [];
    }

    renderComponents() {
        console.log(this.state.components)
        const componentSelectors = this.state.components.map(component => (<button>{component}</button>))
        return componentSelectors
    }

    render() {
        if(!this.state.selectedComponent) {
            return (
                <div>
                    {this.renderComponents()}
                </div>
            )
        } else {
            return <div></div>
        }
    }   
}

export default EditForm