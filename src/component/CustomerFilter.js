import React, {Component} from 'react'
import { Header, Form, Grid, Input } from 'semantic-ui-react'

const options = [
    { key: 'a', text: 'All', value: 'all' },
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class CustomerFilter extends Component {
    state = { 
        name: '',
        gender: '',
        minAge: '',
        maxAge: ''
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
    handleSubmit = () => { 
      this.props.doSearch(this.state)
    }

    resetHandler = () => {
        this.setState({
            name: '', 
            gender: '', 
            minAge: '', 
            maxAge: ''}, 
                this.handleSubmit)
        
    }

    render(){
        return (
            <Form>
                <Header as='h2'>Filter People</Header>
                <Form.Input placeholder='Name' name='name' size='mini' value={this.state.name} onChange={this.handleChange} />
                <Form.Select name='gender' size='mini' value={this.state.gender} options={options} placeholder='Gender' onChange={this.handleChange}/>
                <Header as='h5' textAlign='left'>Age Range</Header>
                <Grid columns={1} style={{margin: 'auto'}}>
                    <Input type='number' name='minAge' value={this.state.minAge} placeholder='min' onChange={this.handleChange} />
                    <Input type='number' name='maxAge' value={this.state.maxAge} placeholder='max' onChange={this.handleChange} />
                </Grid>
                <div style={{marginTop: 20}}>
                    <input onClick={this.handleSubmit} type="submit" value="Submit"></input>
                    <input onClick={this.resetHandler} type="submit" value="Reset"></input>
                </div>
            </Form>
        
        )
    }
    
}

export default CustomerFilter