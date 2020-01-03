import React, { Component } from 'react'
import Bikes from './Bikes'
import BikesContainer from './BikesContainer'
// import Profile from './Profile'

export class BikeShopList extends 
Component {

    state={
        isHidden: true
    }

    toggleHidden= ()=>{
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    

    showBikes=()=>{
        return this.props.bikeshop.bikes.map(bike=>
        <BikesContainer bike={bike} key ={bike.id} addbike={this.props.addbikes}/>) 
    }
    

    handleClick=() => {
        // this.props.showbike(this.props.bikeshop.bikes)
        return this.showBikes()
    }
    

    render() {
        console.log(this.props.showbikes)
        const {name, location, hours, img, email, bikes} = this.props.bikeshop
        return (
         <div className = "cardcontainer">
             <div className="column">
            <div className ="card" >
                <img className ="bikeimage"src={img} alt={name}/>
                <br/>
                <h3>{name}</h3>
                <h3>{location}</h3>
                <p>{hours}</p>
                <button 
                className = "bikeshopbutton"
                onClick={() => {
                     this.toggleHidden()
                }  
                }
                
            
        >Show Bikes</button>
            <div>
            {!this.state.isHidden && this.showBikes()}
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default BikeShopList


