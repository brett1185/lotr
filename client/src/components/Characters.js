import React, {useEffect, useState} from 'react' 
import { Link} from 'react-router-dom'
import axios from 'axios'


const Characters=(props)=>{

    const [characterList, setCharacterList]=useState([])
    const [search, setSearch]=useState('')

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
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <h1 class='text'>List of Characters</h1>
            <div style={{marginBottom:'30px', borderBottom:'5px solid black' }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginRight:'25px', marginLeft:'25px'}}>
                <p class='alphabet'>A-C</p>
                <p class='alphabet'>D-F</p>
                <p class='alphabet'>G-I</p>
                <p class='alphabet'>J-L</p>
                <p class='alphabet'>M-O</p>
                <p class='alphabet'>P-R</p>
                <p class='alphabet'>S-U</p>
                <p class='alphabet'>V-Z</p>
            </div>
            <h2 class='text'>Search by Name:</h2>
            <input style={{width:'100px', position:'center'}}
            type='text' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            {
                characterList.filter((data)=>{
                    if(search===''){
                        return data}
                    else if (data.name.toLowerCase().includes(search.toLowerCase())){
                        return data
                    }
                }).map((name, index)=>(
                    <Link class='text'to={`/view/characters/${name._id}`} key={index}
                    style={{fontSize:'50px'}}
                    >{name.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Characters