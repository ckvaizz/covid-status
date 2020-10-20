import Axios from 'axios';
import React from 'react';


class World extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        Axios.get('https://corona.lmao.ninja/v2/countries').then((responce)=>{
            this.setState({data:responce.data})
        })
    }

    render(){
        return(
            <div className="row">
             <div className="col-md-12">
                 <table className="table table-primary table-bordered table-striped">
                     <thead>
                         <tr>
                             <th>Country</th>
                             <th>Total cases</th>
                             <th>Recovered</th>
                             <th>Death</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             this.state.data.map((itm,ky)=>{
                                 return(
                                 <tr>
                                     <td>{itm.country}
                                     <img style={{width:'50px',marginLeft:'10'}} src={itm.countryInfo.flag} ></img>
                                     </td>
                                      <td>{itm.cases}</td>
                                      <td>{itm.recovered}</td>
                                      <td>{itm.deaths}</td>
                                 </tr>
                                 )
                             })
                         }
                     </tbody>
                 </table>

             </div>
                
            </div>
        )
    }
}
export default World;
