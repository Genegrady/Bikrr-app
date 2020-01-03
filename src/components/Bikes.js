import React, { Component } from 'react'

export class Bikes extends Component {
    render() {
        const {brand, price, size, img} = this.props.b
        debugger
        return (
            <div>
            <img src={img} alt={brand}/>
             <h3>Brand:{brand}</h3>
             <h3>Price: ${price}</h3>
             <h3>Size: {size}</h3>   
             <button>Purchase</button>
            </div>
        )
    }
}

export default Bikes
