import React, {useState} from 'react'

const Pagination=(props)=>{
    const {characterList, perPage, setCurrentPage, currentPage} = props
    const [maxDisplay, setMaxDisplay] = useState(5)
    const [minDisplay, setMinDisplay]=useState(0)
    const pageLimit = 5

    const pages=[]
    for(let i=1; i <= Math.ceil(characterList.length/perPage); i++){
        pages.push(i)
    }
    console.log(pages)

    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }
    let prevEllipses = null
    if(minDisplay >=1){
        prevEllipses = <p> &hellip;</p>
    }
    let nextEllipses = null
    if(pages.length > maxDisplay){
        nextEllipses = <p>&hellip;</p>
    }
    const pageDisplay = pages.map((number)=>{
        if (number < maxDisplay + 1 && number > minDisplay){
            return( <p  className = {currentPage === number ? 'selectedTab' : 'nonSelectedTab'}
            key={number}
            id={number}
            onClick={showPage}>{number}</p>)
        } else{
            return null
        }
    })
    const prevClick = ()=>{
        if ((currentPage-1) % pageLimit === 0){
            setMaxDisplay(maxDisplay - pageLimit)
            setMinDisplay(minDisplay - pageLimit)
        }
        setCurrentPage(currentPage-1)

    }

    const nextClick =() =>{
        if(currentPage + 1 > maxDisplay){
            setMaxDisplay(maxDisplay + pageLimit)
            setMinDisplay(minDisplay + pageLimit)
        }
        setCurrentPage(currentPage + 1)
    }





return(
<div style={{display:'flex', justifyContent:'space-evenly'}}>
    <button style={{border:'1px solid black', height:'50px', width:'50px', textOverflow:'ellipsis', marginTop:'50px'}}
        onClick={prevClick}
        disabled = {currentPage ===1? true : false}> Prev
    </button>

        <div style={{display:'flex', flexDirection:'row'}}>
            {prevEllipses}
            {pageDisplay}
            {nextEllipses}
    </div>
    <button style={{border:'1px solid black', height:'50px', width:'50px',  marginTop:'50px'}}
        onClick={nextClick}
        disabled = {currentPage === pages[pages.length-1]? true : false}>Next
    </button>
</div>
)
}


export default Pagination