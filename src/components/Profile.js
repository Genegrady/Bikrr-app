import React, { Component } from 'react'
import UpdateProfile from './UpdateProfile'
import ProfileBikesContainer from '../components/ProfileBikesContainer'

export class Profile extends Component {
    render() {
        const {name, email, location, img, bikes} = this.props.user
        // debugger
        console.log(this.props.user)
        return (
            <div className="profilecard">
                <img className="profileimage"src={img} alt={name} />
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                <p>Email: {email}</p>
                
                 
                <button
                className="button"
                onClick={() => {
                    this.props.toggleHidden()
                }
                }
                >Update Profile</button>
                <button
                className="button"
                onClick={() => {
                    this.props.toggleBikes()
                }
                }>Add Your Bike</button>
                <div>
                    {bikes.length === 0 ? "You Currently Have No Bikes Associated with this Profile" : this.props.user.bikes.map(bike=><ProfileBikesContainer bike={bike} key={bike.id}/>) }
                </div>
            </div>
        )
    }
}

export default Profile
