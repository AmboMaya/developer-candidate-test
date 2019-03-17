import React, {Component} from 'react'
import CustomerFilter from './CustomerFilter'
import {Container, Grid, Card, Feed} from 'semantic-ui-react'
import Request from 'superagent'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            search: true
        }
    }

    componentDidMount () {
        this.doSearch({})
    }



    doSearch = (filter) => {
        let req = Request.get('http://localhost:3000/persons')
        if (filter.minAge > 0) {
            req.query({minAge:filter.minAge})
        }
        if (filter.maxAge > 0) {
            req.query({maxAge:filter.maxAge})
        }
        if (filter.gender === 'male' || filter.gender === 'female') {
            req.query({gender:filter.gender})
        }
        if(filter.name && filter.name.length > 0)
            req.query.where('name', filter.name)

        req.then(res => (this.setState({persons:res.body.persons})))
    }

    render() { 
        return ( 
            <Container>
                <Grid textAlign='center' style={{ height: '100%', marginTop: 20 }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <CustomerFilter doSearch={this.doSearch}/>
                        <Card reset={this.props.resetHandler} style={{marginLeft: '15%'}}>
                            {this.state.persons ? 
                                this.state.persons.map((person, key) => 
                                <div key={key} style={{textAlign: 'left', padding: 20}}>
                                    <Feed.Label>{person.name}</Feed.Label>
                                    <Feed.Summary>
                                            <p>Age: {person.age} <br />
                                            Gender: {person.gender}</p>
                                    </Feed.Summary>
                                </div>)
                                :null}
                            {this.state.persons && this.state.persons.length==0 ? 
                                (<p>No persons match your query </p>)
                                : null }
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}
 
export default App