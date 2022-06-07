import React, {useEffect, useState} from 'react' 
import {useParams} from 'react-router-dom'
import axios from 'axios'


const ViewOneBook=(props)=>{
    const {id} = useParams()
    const [book, setBook]=useState([])

    useEffect(()=>{
        const headers={
            'accept':'application/json',
            'Authorization':'Bearer nI2iRosw6IQkswpq3KXe'
        }
        axios.get(`https://the-one-api.dev/v2/book/${id}/chapter`,{
            headers:headers
        })
        .then((res)=>{
            console.log(res.data)
            setBook(res.data.docs)
            
        })
        
        .catch((err)=> console.log(err))
    },[id])
    return(
        
        <div>
            <h1>Chapters</h1>
            {
            book.map((chapter, index)=>(
                <p class='text'key={index}
                style={{fontSize:'30px'}}>{chapter.chapterName}</p>
            ))
            }
        </div>
    )
}

export default ViewOneBook