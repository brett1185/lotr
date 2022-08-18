import React from 'react'

const Pagination=(props)=>{
    const {characterList, perPage, setCurrentPage, currentPage} = props
    

    const pages=[]
    for(let i=1; i <= Math.ceil(characterList.length/perPage); i++){
        pages.push(i)
    }
    console.log(pages)



    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }

return(
<div style={{display:'flex', justifyContent:'space-between', flex:'1'}}>
    <div style={{border:'1px solid black', height:'50px', width:'50px', textOverflow:'ellipsis'}}
        onClick={()=>setCurrentPage(currentPage-1)}>
        
    </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'2px solid red'}}>
        {pages.map((number, index)=>(
        <p
            key={index}
            id={number}
            onClick={showPage}>{number}</p>))}
    </div>
    <div style={{border:'1px solid black', height:'50px', width:'50px', textOverflow:'ellipsis'}}
        onClick={()=>setCurrentPage(currentPage+1)}>
    </div>
</div>
)
}


export default Pagination