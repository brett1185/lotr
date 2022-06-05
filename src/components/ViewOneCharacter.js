import React, {useEffect, useState} from 'react' 
import {useParams} from 'react-router-dom'
import axios from 'axios'


const ViewOneCharacter=(props)=>{

    const {id}=useParams()
    const[character, setCharacter]=useState([])

    useEffect(()=>{
        const headers={
            'accept':'application/json',
            'Authorization':'Bearer nI2iRosw6IQkswpq3KXe'
        }
        axios.get(`https://the-one-api.dev/v2/character/${id}`,{
            headers:headers
        })
        .then((res)=>{
            console.log(res.data.docs)
            setCharacter(res.data.docs)
            
        })
        
        .catch((err)=> console.log(err))
    },[])

    return(
        <div>
            {character.map((character, index)=>(
                <div key={index}>
            <h1>{character.name}</h1>
            <p>race:{character.race}</p>
            <p>Gender: {character.gender}</p>
            </div>))}
        </div>
    )
    
}

export default ViewOneCharacter

