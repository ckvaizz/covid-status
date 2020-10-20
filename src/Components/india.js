import React from 'react';
import {Card} from 'react-bootstrap';
import State from './state';
import Axios from 'axios';


class India extends React.Component{

    constructor(){
        super();
        this.state={

            data:[]
        }
    }

 componentDidMount(){
     Axios.get('https://corona.lmao.ninja/v2/countries/india').then((responce)=>{
         this.setState({data:responce.data})
     })
 }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://www.countryflags.io/in/shiny/64.png"></img>
                        <h3>INDIA</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">

                            <Card className="badge badge-primary" style={{ width: '13rem' }}>
  
                            <Card.Body className="text-center">
                            <Card.Title>TOTAL CASE</Card.Title>
                                <h3>{this.state.data.cases}</h3>
                            
    
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-md-3">

                            <Card className="badge badge-warning" style={{ width: '13rem' }}>
  
                            <Card.Body className="text-center">
                            <Card.Title>ACTIVE CASES</Card.Title>
                            <h3>{this.state.data.active}</h3>
                            
    
                            </Card.Body>
                            </Card>
                            </div>
                            

                            
                            <div className="col-md-3">
                            <Card className="badge badge-success" style={{ width: '13rem' }}>
  
                            <Card.Body className="text-center">
                            <Card.Title>RECOVERED</Card.Title>
                            <h3>{this.state.data.recovered}</h3>
                            
    
                            </Card.Body>
                            </Card>
                            </div>
                            
                            <div className="col-md-3">
                            <Card className="badge badge-danger" style={{ width: '13rem' }}>
  
                            <Card.Body className="text-center">
                            <Card.Title>DEATH</Card.Title>
                            <h3>{this.state.data.deaths}</h3>
                            
    
                            </Card.Body>
                            </Card>
                            </div>
                            
                        </div>

                    </div>

                </div>
                <div className="col-md-12">
                    <State/>

                </div>
            </div>
        )
    }
} 
export default India;