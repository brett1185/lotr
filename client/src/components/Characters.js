import React, {useEffect, useState} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
import ViewAlphabetically from '../views/viewAlphabetically'
import Results from '../views/Results'


const Characters=(props)=>{
    const regAtoC = new RegExp(/^[A-C]/g)
    const regDtoF = new RegExp(/^[D-F]/g)
    const regGtoI = new RegExp(/^[G-I]/g)
    const regJtoL = new RegExp(/^[J-L]/g)
    const regMtoO = new RegExp(/^[M-O]/g)
    const regPtoR = new RegExp(/^[P-R]/g)
    const regStoU = new RegExp(/^[S-U]/g)
    const regVtoZ = new RegExp(/^[V-Z]/g)

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

    const alphArray=[
        {label:'A-C', content: characterList.filter(name=>name.name===regAtoC).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'D-F', content: characterList.filter(name=>name.name===regDtoF).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'G-I', content: characterList.filter(name=>name.name===regGtoI).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'J-L', content: characterList.filter(name=>name.name===regJtoL).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'M-O', content: characterList.filter(name=>name.name===regMtoO).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'P-R', content: characterList.filter(name=>name.name===regPtoR).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'S-U', content: characterList.filter(name=>name.name===regStoU).map((names, index)=>(
            <Link class='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))},
        {label:'V-Z', content: characterList.filter(name=>name.name===regVtoZ).map((names, index)=>(
            <Link className='text'to={`/view/characters/${names._id}`} key={index}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link>
        ))}
    ]
    const [ allTabs, setAllTabs ] = useState(alphArray);

    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);


        return(
        <div >
            <ViewAlphabetically
                allTabs={ allTabs } 
                currentTabIndex={ currentTabIndex }
                setCurrentTabIndex={ setCurrentTabIndex } />
            <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex }/>
        </div>
    )
}

export default Characters