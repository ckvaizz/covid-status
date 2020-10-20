import React from 'react';
import Header from './Components/header';
import India from './Components/india';
import World from './Components/world';


import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'; 


class App extends React.Component{

render(){
  return (
    <div className="container-fluid">


      <Router>
        
          <Header/>
        
        <Switch>
          <Route exact path="/">
            <India/>
          </Route>
          <Route path='/india'>
            <India/>
          </Route>
          <Route path="/world">
            <World/>
          </Route>

        </Switch>
      </Router>
      
      
    </div>
    
  );
}
}

export default App;
