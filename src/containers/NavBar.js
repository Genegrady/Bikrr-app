import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className= "navbar">

             
             <NavLink className ="link"to="/">Home</NavLink>
             <NavLink className ="link" to="/Bikeshop">Bike Shops</NavLink>   
             <NavLink className ="link" to="/Biketips">Bike Tips</NavLink>   
              <NavLink className= "cart" to="/cart"> Cart</NavLink>  
            </div>
        )
    }
}

export default NavBar
