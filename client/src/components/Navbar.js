import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar=(props)=>{

    const navigate=useNavigate()

    return(
        <div>
            <h1 class='text'>Welcome!</h1>
            <button class='text' onClick={navigate('/view/characters')}>View Characters</button>
            <button class='text' onClick={navigate('/')}>View Books</button>
            <button class='text' onClick={navigate(/view/map)}>View Map</button>
        </div>
    )

}

export default Navbar