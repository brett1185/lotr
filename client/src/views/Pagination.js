import React, {useState} from 'react'

const Pagination=(props)=>{
    const {characterList}=props
    const [currentPage, setCurrentPage]=useState(1)
    const [listPages, setListPages]=useState(0)
    const [perPage, setPerPage]=useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit]=useState(5)
    const [minPageNumLimit, setMinPageNumLimit]=useState(0)
    const [pages, setPages]=useState([])


    for(let i=1; i<Math.ceil(characterList/perPage); i++){
        pages.push(i)
    }

    const showPage=(e)=>{
        setCurrentPage(Number(e.target.id))
    }

    return(
        <div>
            <ul>
            {pages.map((number)=>{
                if(number < maxPageNumberLimit +1 && number > minPageNumLimit){
                    <li 
                    key={number}
                    id={number}
                    onClick={showPage}
                    className={currentPage === number? 'active':null}>
                        {number}
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