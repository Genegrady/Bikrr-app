import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import  BikeShopContainer from './containers/BikeShopContainer'
import Home from './containers/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './containers/NavBar'
import BikeTips from './containers/BikeTips'
// import Bikes from './components/Bikes';
// import Profile from './components/Profile';
import BikesContainer from './components/BikesContainer';
import Bridge from './images/bgimage.jpg'
import Cart from './components/ShoppingCart'


class App extends Component {
  
  
  constructor(){
    super()
    this.state ={
    user: [],
    bikeShops: [],
    singleBike: {},
    bikes: [],
    cart: []
  }
  }

  fetchBikeShops=() => {
    fetch(`http://localhost:3000/bike_shops`)
    .then(resp => resp.json())
    .then(bsArr=> this.setState({
      bikeShops: bsArr
    }))
  }

  fetchUser= () => {
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(newuser => this.setState({
      user: newuser
    }))
  }

  fetchBikes = () => {
    fetch(`http://localhost:3000/bikes`)
    .then(resp => resp.json())
    .then(bArr => this.setState({
      bikes: bArr
    }))
  }
  
  

  componentDidMount() {
    this.fetchBikeShops()
    this.fetchUser()
   
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.user !== this.state.user){
    this.fetchUser()
    }
    
  }
  

  showBikes=(newbikes) => {
    this.setState({
      bikes: newbikes
    })
  }

  addBikesToCart = (bikeObj) => {
    this.setState({
      cart: [...this.state.cart, bikeObj]
    })
  }
  
  
  
  
  
  render(){
  return (
    <div styles={{backgroundImage: `url(${Bridge})`}}>
     <Router >
       <NavBar />
       <div>
        {/* <Bikes b = {this.state.singleBike}/> */}
        <Route exact path= "/" render={routerProps=> <Home {...routerProps} user = {this.state.user}
        bikes={this.state}/>}/>
        <Route exact path= "/Bikeshop" render={routerProps=> <BikeShopContainer {...routerProps} bikeshops ={this.state.bikeShops} addbikes = {this.addBikesToCart} />
        }/>
        <Route exact path= "/Biketips" component = {BikeTips}/>
        {this.state.bikes.length === 0 ? null : <BikesContainer bike={this.state.bikes}/>}
        <Route exact path="/cart" render={routerProps=><Cart cart={this.state.cart}/>}/>
       </div>
     </Router>
    </div>
  );
  }
}

export default App;
