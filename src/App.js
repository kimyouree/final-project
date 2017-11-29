import React, { Component } from 'react';
import { Button, Icon, Modal } from 'react-materialize';
import { Route, Switch, Link } from 'react-router-dom';
import MyMap from './MyMap';
import Form from './Form';
import './App.css';
import Footer from './Footer';
import ParkDetails from './ParkDetails'


class App extends Component {
  constructor() {
    super()
    this.state = {
      resultsList: [],
      // lat: null,
      // lng: null, 
      defaultzoom: 11
    }

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(parks) {
    // let lat = 
    // console.log(parks)
    this.setState({
      resultsList: parks,

    })
  }


  render() {

// props.match
    return (
      <div className="App">

        
        <h1 className="App--h1">Pen Pawls</h1><br />
        <div className="header2">
          <h4 className="App--h4">Nearby parks for your small and medium-sized canine friends</h4>

        </div>

        <div className="form-container">
        {/* <Switch> */}
        {/* <Route path='/:smallDogParks' */}
          <Form resultsList={this.state.resultsList} submitHandler={this.submitHandler} />

        </div>
        <div className="Map-container col s12 m2 z-depth-4">



          <MyMap defaultzoom={this.state.defaultzoom} submitHandler={this.submitHandler} resultsList={this.state.resultsList} />

        </div>
{/* <Switch>
        <ParkDetails />

</Switch> */}
        <Footer />

      </div>

    );
  }
}

export default App;

