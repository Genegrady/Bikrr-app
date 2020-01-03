import React, { Component } from 'react'

export class BikeTips extends Component {
    render() {
        return (
            <div className="biketips">
                <h1>Tips for maintaining your bike for both performance and longevity</h1>
                <h2>The ABC’s: Air, Brakes, Chain</h2>
                <p>Before every ride, be sure to check the “ABC’s” to make your ride safer and help your bike last longer.</p>
                <ul>
                    <li><strong>A is for Air:</strong>Having properly inflated tires helps prevent flats. Check the sidewall of your tire for the recommended tire pressure. While you’re checking the air, take the opportunity to ensure your quick-release levers and thru axles (if you have them) are properly tightened as well. Then, before you ride, make sure you have your patch kit and pump with you.</li>
                    <li><strong>B is for Brakes:</strong>Squeeze your front and rear brake levers to make sure that the brakes engage properly and smoothly.</li>
                    <li><strong>C is for Chain:</strong>Look at your chain and all the gears. Keeping your chain lubricated and everything clean will ensure your bike shifts easier and the drivetrain (made up of the front chain rings, rear cassette, rear derailleur and chain) last longer.</li>
                </ul>
            </div>
        )
    }
}

export default BikeTips
