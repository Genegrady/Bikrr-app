import React, { Component } from 'react'
import Profile from '../components/Profile'
import UpdateProfile from '../components/UpdateProfile'
import addBike, { AddBike } from '../components/AddBike'
import BikesContainer from '../components/BikesContainer'
export class Home extends Component {
    state={
        isHidden: true,
        addBikeIsHidden: true
    }

    toggleHidden= ()=>{
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    toggleBikes = () => {
        this.setState({
            addBikeIsHidden: !this.state.addBikeIsHidden
        })
    }
    
    render() {
        console.log(this.props.user)
        return (
            <div>
               <div>
                   {this.props.user.map(user=><Profile user = {user} key ={user.id} toggleHidden={this.toggleHidden} toggleBikes={this.toggleBikes}/>)}
               </div> 
               <div className="update">    
                  {!this.state.isHidden && this.props.user.map(user=><UpdateProfile user = {user} key ={user.id}/>)}
               </div>
               <div>
                   {!this.state.addBikeIsHidden && this.props.user.map(user=> <AddBike user = {user} key ={user.id} handleSubmit={this.props.handleSubmit} />)}
               </div>
                
            </div>
        )
    }
}

export default Home
