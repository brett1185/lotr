import React, {useEffect, useState} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
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

    
    const [search, setSearch]=useState('')
    const [characterList, setCharacterList] = useState ([])

    useEffect(()=>{
        const headers={
            'accept':'application/json',
            'Authorization':'Bearer nI2iRosw6IQkswpq3KXe'
        }
        axios.get(`https://the-one-api.dev/v2/character`,{
            headers:headers
        })
        .then((results)=>{
            console.log(results.data.docs)
            setCharacterList(results.data.docs)       
        })
        
        .catch((err)=> console.log(err))
    },[])

    const [activeTab, setActiveTab] =useState(0)

    const alphArray=[
        {label: 'View All', content: characterList.map((names, index)=>(
            <div key={index}>
            <Link className='text'to={`/view/characters/${names._id}`}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link></div>)
        )},
        {label:'A-C', content: characterList.filter(name=>name.name===regAtoC).map((names, index)=>(<div key={index}>
            <Link class='text' to={`/view/characters/${names._id}`}>{names.name}</Link></div>
        ))
        },
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
            <Link class='text' to={`/view/characters/${names._id}`} key = {index}> {characterList.name}
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
    const tabStyle = (index) => {
        if (index === activeTab) {
            return "selectedTab";
            } else {
            return "nonSelectedTab";
            }
        }
    
        const setSelectedTab = (index) => {
            setCurrentTabIndex(index);
        }


        return(
        <div >
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'30px'}}>
                {
                    allTabs.map((item, index) => (
            <div key={index} className={`tab ${ tabStyle(index) }`} onClick={()=>setActiveTab(index)}>
                { item.label }
            </div>
        ))
        }
            </div>
    
    
            <Results tabText={alphArray[activeTab].content}/>
        </div>
    )
}

export default Characters