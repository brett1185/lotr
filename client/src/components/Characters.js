import React, {useEffect, useState} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
import Results from '../views/Results'
import ViewAlphabetically from '../views/viewAlphabetically'
import Pagination from '../views/Pagination'


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



    const searchTool=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

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
        {label:'A-C', content: characterList.filter(name=>regAtoC.exec(name.name)).map((names, index)=>(
        <div key={index}>
            <Link className='text' to={`/view/characters/${names._id}`} style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
            </div>
        ))
        },
        {label:'D-F', content: characterList.filter(name=>regDtoF.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'G-I', content: characterList.filter(name=>regGtoI.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'J-L', content: characterList.filter(name=>regJtoL.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'M-O', content: characterList.filter(name=>regMtoO.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'P-R', content: characterList.filter(name=>regPtoR.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'S-U', content: characterList.filter(name=>regStoU.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'V-Z', content: characterList.filter(name=>regVtoZ.exec(name.name)).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label: 'Search by name', content: <div style={{display: 'flex', justifyContent:'center', flexDirection:'column'}}>
            <input style={{width: '100px', marginLeft:'46%'}} type='text' placeholder='type name here...' onChange={(e)=>setSearch(e.target.value)}/>
            {characterList.filter((name)=>{
                if (search === ''){
                    return name}
                else if (
                    name.name.toLowerCase().includes(search)){
                    return name}})
                .map((names, index)=>(
            <Link key ={index} className='text' to={`/view/characters/${names._id}`} style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
            ))}
        </div>
    }
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
            <div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'30px'}}>
                    {allTabs.map((item, index) => (
            <div key={index} className={`tab ${ tabStyle(index) }`} onClick={()=>setActiveTab(index)}>
                { item.label }
            </div>
        ))
                    }
            </div>    

         {/* <ViewAlphabetically allTabs={allTabs} currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex} /> */}            
            <Results tabText={alphArray[activeTab].content}/>
            <Pagination characterList={alphArray[activeTab].content}/>
        </div>
    )
}

export default Characters