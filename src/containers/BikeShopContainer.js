import React, { Component } from 'react'
import BikeShopList from '../components/BikeShopList'


// import React, { Component } from 'react'

export class BikeShopContainer extends Component {
bikeShopList = () =>{ return this.props.bikeshops.map(bikeshop=><BikeShopList bikeshop={bikeshop} key={bikeshop.id} addbikes={this.props.addbikes}/>
        )}

    render() {
       
        return (
            <div>
                <div>
                    {this.bikeShopList()}
                </div>
                
            </div>
        )
    }
}

export default BikeShopContainer

