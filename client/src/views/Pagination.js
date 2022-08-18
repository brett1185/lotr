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
<div style={{display:'flex', justifyContent:'space-evenly'}}>
<div style={{border:'1px solid black', height:'50px', width:'50px',  marginTop:'50px'}}
        onClick={()=>setCurrentPage(1)}>
    </div>
    <div style={{border:'1px solid black', height:'50px', width:'50px', textOverflow:'ellipsis', marginTop:'50px'}}
        onClick={()=>setCurrentPage(currentPage-1)}
    >
        
    </div>
        <div style={{display:'flex', flexDirection:'row'}}>
        {pages.map((number, index)=>(
        <p  style ={{border: '1px solid red'}}
            key={index}
            id={number}
            onClick={showPage}>{number}</p>))}
    </div>
    <div style={{border:'1px solid black', height:'50px', width:'50px',  marginTop:'50px'}}
        onClick={()=>setCurrentPage(currentPage+1)}>
    </div>
    <div style={{border:'1px solid black', height:'50px', width:'50px',  marginTop:'50px'}}
        onClick={()=>setCurrentPage(pages.length)}>
    </div>
</div>
)
}


export default Pagination