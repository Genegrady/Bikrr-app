import React, { Component } from 'react'

export class UpdateProfile extends Component {
    constructor(props) {
        super(props)
        this.state={
            newUser:{
                name: '',
                location: '',
                email: '',
                img: ''
                
            }
        }
        
    }

    handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let id = this.props.user.id
    let newUser = {
        name: this.state.name,
        location: this.state.location,
        email: this.state.email,
        img: this.state.img
    } 
    fetch(`http://localhost:3000/users/${id}`, {
      method:'PATCH',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
    // data_key: data_value
        name: newUser.name,
        location: newUser.location,
        email: newUser.email,
        img: newUser.img
    
      })
    })
    .then(resp => resp.json())
    .then((updatedUser) => {
        console.log(updatedUser)
    }
    )
   
//   window.location.reload();
    
  } 
  
  


    
    render() {
        return (
            <div className="updateprofile">
                <h3>Update Profile</h3>
                <form className="form" onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input name="name" 
                value= {this.state.name}
                onChange={this.handleChange} />
                </label>
                <label>
                Email:
                <input name="email" 
                value= {this.state.email}
                onChange={this.handleChange} />
                </label>
                <label>
                Location:
                <input name="location" 
                value={this.state.location}
                onChange={this.handleChange} />
                </label>
                <label>
                New Profile Image:
                <input name="img" 
                value={this.state.img}
                onChange={this.handleChange} />
                </label>
                <input className="button" type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default UpdateProfile
