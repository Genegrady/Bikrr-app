import React, { Component } from 'react'
import Bikes from './Bikes'


class BikesContainer extends  Component {

    
   
    // showBike = () => {
    //     this.props.bike.map(b=><Bikes bike={b} key={b.id}/>)
    // }
    
    
   
    

    // debugger
    
    // console.log(bikes)
    render(){
        // debugger
        console.log(this.props.bike.price)
        const {brand, img, price, size, quantity} = this.props.bike
        return(
       <div className = "bikecardcontainer">
             <div className="bikecolumn">
            <div className ="bikecard" >
                <img className ="indbikeimage"src={img} alt={brand}/>
                <br/>
                <h3>{brand}</h3>
                <h2>Price: ${price}</h2>
                <p>Size: {size}</p>
                <p>{quantity}</p>
                <button
                className= "button"
                onClick={() => {
                    // console.log(this.props.addbike())
                    // debugger
                }
                }
            
            >Add to cart</button>
            </div>
            </div>
            </div>
       
    )
    }
     
    
   
}

export default BikesContainer
