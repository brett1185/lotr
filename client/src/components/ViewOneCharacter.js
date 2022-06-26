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
    },[id])

    return(
        <div>
            {character.map((character, index)=>(
                <div  key={index}>
            <h1 class='text'>{character.name}</h1>
            <p class='text'>race:{character.race}</p>
            <p class='text'>Gender: {character.gender}</p>
            {character.birth===''?(
                <p class='text'>Date of birth: Unknown</p>
            ):(
                <p class='text'>Date of Birth: {character.birth}</p>
            )}
            {character.death===''?(
                <p class='text'>Date of death: Unknown</p>
            ):(
                <p class='text'>Date of death: {character.death}</p>
            )}
            <a href={character.wikiUrl} class='text'>For More</a>
            
            </div>))}
        </div>
    )
    
}

export default ViewOneCharacter

