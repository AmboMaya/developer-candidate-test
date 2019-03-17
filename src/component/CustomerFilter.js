import React, {Component} from 'react'
import { Header, Form, Grid, Input, Button } from 'semantic-ui-react'

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
      this.setState({ 
        name: '',
        gender: '',
        minAge: '',
        maxAge: ''
    })
    }

    render(){
        return (
            <Grid textAlign='center' style={{ height: '100%', marginTop: 20 }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form>
                        <Header as='h2'>Filter Customer</Header>
                        <Form.Input placeholder='Name' name='name' onChange={this.handleChange} />
                        <Form.Select fluid gender='gender' options={options} placeholder='Gender' onChange={this.handleChange}/>
                        <Header as='h5' textAlign='left'>Age Range</Header>
                        <Grid columns={1} style={{margin: 'auto'}}>
                            <Input type='number' min={0} placeholder='min' onChange={this.handleChange} />
                            <Input type='number' max={100} placeholder='max' onChange={this.handleChange} />
                        </Grid>
                        <Button content='Submit' />
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
    
}

export default CustomerFilter