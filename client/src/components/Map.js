import React from 'react'
import '../App.css';
import Navbar from './Navbar';

const Map=(props)=>{

    return(
        <div className='map'>
            <Navbar/>
                <div className='shireLink'>
            
                <a href='https://en.wikipedia.org/wiki/The_Shire'
                >The Shire</a>
                </div>
        </div>
    )
}

export default Map