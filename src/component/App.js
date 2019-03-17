import React, {Component} from 'react'
import CustomerFilter from './CustomerFilter'
import {Container} from 'semantic-ui-react'

class App extends Component {

    render() { 
        return ( 
            <Container>
                <CustomerFilter />
            </Container>
        )
    }
}
 
export default App