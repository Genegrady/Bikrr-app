import React, { Component } from 'react'


export class ProfileBikesContainer extends Component {

    deleteBike = () => {
        let id = this.props.bike.id
        fetch(`http://localhost:3000/bikes/${id}`, {
         method:'DELETE',
         headers: { 
             'Content-type': 'application/json',
             'accept': 'application/json'
         }
        })
        .then(resp => resp.json())
        .then((e) => {
            console.log(e)
        }
        )
        .catch(error => console.error('Error:', error))
        //   window.location.reload();

    }
    
    render() {
                console.log(this.props.bike.price)
        const {brand, img, price, size} = this.props.bike
        return(
       <div className = "profilebikecardcontainer">
             <div className="bikecolumn">
            <div className ="bikecard" >
                
                <img className ="indbikeimage"src={img} alt={brand}/>
                <br/>
                <h3>{brand}</h3>
                <h2>Price: ${price}</h2>
                <p>Size: {size}</p>
                <button
                className="button"
                onClick={this.deleteBike}>
                    Delete Bike
                </button>
            </div>
            </div>
            </div>
       
    
        )
    }
}

export default ProfileBikesContainer
