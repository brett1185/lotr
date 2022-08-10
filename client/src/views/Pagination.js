import React,  {useState} from 'react'

const Pagination=(props)=>{
    const {characterList} = props
    const [currentPage, setCurrentPage]=useState(1)
    const [perPage, setPerPage] = useState(10)

    const pages=[]
    for(let i=1; i <= Math.ceil(characterList.length/perPage); i++){
        pages.push(i)
    }
    console.log(pages)

    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }

return(
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'2px solid red', textOverflow: 'hidden'}}>
    {pages.map((number, index)=>(
        <p className='text'
        key={index}
        id={number}>{number}</p>))}
</div>
)
}


export default Pagination