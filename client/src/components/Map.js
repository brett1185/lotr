import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Map=(props)=>{

    const navigate=useNavigate()




    return(
        <div className='map'>
                <div>
            
                <a href='https://en.wikipedia.org/wiki/The_Shire'
                className='shireLink'>The Shire</a>
                </div>
        </div>
    )
}

export default Map