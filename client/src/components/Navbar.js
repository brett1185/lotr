import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=(props)=>{


    return(
        <div style={{display:'flex', flexDirection:'column', backgroundImage: './build/ringBanner.jpeg'}}>
            <h2 className='text'
                style={{fontSize:'60px'}}>Directory</h2>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/view/map'}>View the Map</Link>
            <Link className='link' to={'/view/characters'}>View Characters!</Link>
            </div>
        </div>
    )

}

export default Navbar