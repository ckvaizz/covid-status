import React from 'react';
import Axios from 'axios';
import {Accordion,Card,Button,Navbar,Container} from 'react-bootstrap';


class State extends React.Component{

constructor(){
    super();
    this.state ={
        statedata:{}
    }
}
componentDidMount(){
    Axios.get('https://api.covid19india.org/state_district_wise.json').then((responce)=>{
        console.log(responce.data);  
        this.setState({statedata:responce.data})
    })
    
}
    

    render(){
        let keys= Object.keys(this.state.statedata); 
        return(
            <div className="row">
              <div className="col-md-12">
                <Accordion className="mt-3">
                    {
                    keys.map((item,ky)=>{
                        if(ky==0){

                        }else{

                        

                        let districts=this.state.statedata[item].districtData;
                        let district_keys=Object.keys(districts);

                        let total_active=0;
                        let total_confirm=0;
                        let total_death=0;
                        let total_recovered=0;
                        let district_list=[];
                        for(let x in districts){
                            total_active += districts[x].active;
                            total_confirm += districts[x].confirmed;
                            total_death += districts[x].deceased;
                            total_recovered += districts[x].recovered;
                            let ob=districts[x];
                            ob["district_name"]=x;
                            district_list.push(ob);
                        }


                        return(
                        <Card className="text-center" >
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="primary"  style={{width:'89%'}} eventKey={ky}>
                        <div className="container">
                        <div className="row container">
                       <div className="col-xm-12-md-2 "> <span className="">{item} </span></div>
                        
                       

                     <div className="col-xm-12-md-2"> <span className="badge-dark p-1 mr-2 ">Total case-{total_confirm}</span></div>
                   <div className="col-xm-12-md-2 "> <span className="badge-dark p-1 mr-2">Active-{total_active}</span></div>
                   <div className="col-xm-12-md-2 ">     <span className="badge-dark p-1 mr-2">Recovered-{total_recovered}</span></div>
                   <div className="col-xm-12-md-2 ">   <span className="badge-dark p-1 mr-2">Death-{total_death}</span></div>
                    </div>
                    </div>
                        
                         
                         
                        
                        
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={ky}>
                        <Card.Body>
                            <table className="table table-bodered table-striped">
                                <thead>
                                    <th>District</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Death</th>
                                </thead>
                                <tbody>
                                    {
                                        district_list.map((itm,ky)=>{
                                            return(
                                            <tr>
                                                <td>{itm.district_name}</td>
                                                <td>{itm.confirmed}</td>
                                                <td>{itm.active}</td>
                                                <td>{itm.recovered}</td>
                                                <td>{itm.deceased}</td>
                                            </tr>
                                            )
                                            
                                        })
                                    }

                                </tbody>
                            </table>
                        </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        )
                  }
                    })

                    }
                
  
                </Accordion>

              </div>
            
            </div>
        )
    }
}
export default State; 