import React, {useEffect, useState} from 'react' 
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'


const Characters=(props)=>{
    const {id} = useParams()
    const [characterList, setCharacterList]=useState([])

    useEffect(()=>{
        const headers={
            'accept':'application/json',
            'Authorization':'Bearer nI2iRosw6IQkswpq3KXe'
        }
        axios.get(`https://the-one-api.dev/v2/character`,{
            headers:headers
        })
        .then((res)=>{
            console.log(res.data.docs)
            setCharacterList(res.data.docs)
            
        })
        
        .catch((err)=> console.log(err))
    },[])

    return(
        <div>
            <h1>List of Characters</h1>
            {
                characterList.map((name, index)=>(
                    <Link to={`/view/characters/${name._id}`} key={index}>{name.name}</Link>
                ))
            }
        </div>
    )
}

export default Characters