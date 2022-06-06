import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ViewBooks=(props)=>{
    const [bookList, setBookList]=useState ([])
    useEffect(()=>{
        const headers={
            'accept':'application/json',
            'Authorization':'Bearer nI2iRosw6IQkswpq3KXe'
        }
        axios.get('https://the-one-api.dev/v2/book',{
            headers:headers
        })
        .then((res)=>{
            console.log(res.data.docs)
            setBookList(res.data.docs)
            
        })
        
        .catch((err)=> console.log(err))
    },[])


return(
    <div style={{display:'flex', flexDirection:'column'}}>
        
            {bookList?
            bookList.map((book, index)=>(
            <Link class='text'to={`/view/book/${book._id}`}
            key={index}
            style={{margin:'90px', fontSize:'50px'}}
            >{book.name}</Link>)
            )
        :null}
    
    </div>
)
        }
export default ViewBooks