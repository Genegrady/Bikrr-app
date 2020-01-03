import React, { Component } from 'react'

export class AddBike extends Component {

    constructor(props) {
       super(props)
       this.state={
               brand: '',
               price: '',
               size: '',
               img: '', 
               user_id: this.props.user.id,
               bike_shop_id: null
       } 
    }

    handleChange = (event) => {
    event.persist()
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit= (e) => {
      e.preventDefault()
      let id = this.props.user.id
      let brand =  this.state.brand
      let price =  this.state.price
      let size=    this.state.size
      let img=  this.state.img
      
      
      fetch(`http://localhost:3000/bikes`, {
       method:'POST',
       headers: { 
           'Content-type': 'application/json',
           'accept': 'application/json'
       },
       body: JSON.stringify({
        brand: brand,
        size: size,
        price: price,
        img: img,
        bike_shop_id: this.state.bike_shop_id ,
        user_id: id
        })
      })
      .then(resp => resp.json())
      .then(console.log)
        //   window.location.reload();

  }
  

    render() {
        return (
            <div className="updateprofile">
               <h3>Add Your Bike To Your Profile!</h3>
               <form className="form" onSubmit={
                   this.handleSubmit
               }>
                   <label>
                       Brand:
                       <input name= "brand"
                        value={this.state.brand}
                        onChange={this.handleChange}
                       >
                       </input>
                   </label>
                   <label>
                       Price:
                       <input name= "price"
                        value={this.state.price}
                        onChange={this.handleChange}
                       >
                       </input>
                   </label>
                   <label>
                       Size:
                       <input name= "size"
                        value={this.state.size}
                        onChange={this.handleChange}
                       >
                       </input>
                   </label>
                   <label>
                       Image Url:
                       <input name= "img"
                        value={this.state.img}
                        onChange={this.handleChange}
                       >
                       </input>
                   </label>
                   <input className= "button" type="submit" value="submit"/>
               </form>
            </div>
        )
    }
}

export default AddBike
