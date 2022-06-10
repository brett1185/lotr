import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=(props)=>{


    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <h2 className='text'>Directory</h2>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Link className='text' to={'/home'}>Home</Link>
            <Link className='text' to={'/view/map'}>View the Map</Link>
            <Link className='text' to={'/view/characters'}>View Characters!</Link>
            </div>
        </div>
    )

}

export default Navbar