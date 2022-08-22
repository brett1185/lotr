import React from 'react'

const Pagination=(props)=>{
    const {characterList, perPage, setCurrentPage, currentPage} = props
    const maxDisplay = 5
    const minDisplay=0

    const pages=[]
    for(let i=1; i <= Math.ceil(characterList.length/perPage); i++){
        pages.push(i)
    }
    console.log(pages)

    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }
    const pageDisplay = pages.map((number)=>{
        if (number < maxDisplay + 1 && number > minDisplay){
            return( <p  style ={{fontSize:'15px', border: '1px solid red', height:'16px'}}
            key={number}
            id={number}
            onClick={showPage}>{number}</p>)
        } else{
            return null
        }
    })


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
            {pageDisplay}
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