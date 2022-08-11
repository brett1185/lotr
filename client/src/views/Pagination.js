import React,  {useState} from 'react'

const Pagination=(props)=>{
    const {characterList, perPage, setCurrentPage} = props
    

    const pages=[]
    for(let i=1; i <= Math.ceil(characterList.length/perPage); i++){
        pages.push(i)
    }
    console.log(pages)



    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }

return(
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'2px solid red', overflow:'scroll'}}>
    {pages.map((number, index)=>(
        <p
        key={index}
        id={number}
        onClick={showPage}>{number}</p>))}
</div>
)
}


export default Pagination