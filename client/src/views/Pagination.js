import React,  {useState} from 'react'

const Pagination=(props)=>{
    const {characterList} = props
    const [currentPage, setCurrentPage]=useState(1)
    const [listPages, setListPages]=useState(0)
    const [maxPageNumberLimit, setMaxPageNumberLimit]=useState(5)
    const [minPageNumLimit, setMinPageNumLimit]=useState(0)
    const [pages, setPages]=useState([])
    const [perPage, setPerPage] = useState(10)


    for( let i =1; i <Math.ceil(characterList.length/perPage); i++){
    pages.push(i)
    }

    
console.log(pages)


    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }

    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'2px solid red'}}>
            <ul>
            {pages.map((number)=>{
                if(number < maxPageNumberLimit +1 && number > minPageNumLimit){
                    <li 
                    key={number}
                    id={number}
                    onClick={showPage}
                    className={currentPage === number? 'active':null}
                    className='text'>
                        {number.index}
                    </li>
                }
                else{
                    return null}
                })}
    </ul>
        </div>
    )
}


export default Pagination