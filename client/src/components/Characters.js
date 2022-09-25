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
    const [currentPage, setCurrentPage]=useState(1)
    const perPage=10
    const lastSplitItem = currentPage * perPage
    const firstSplitItem = lastSplitItem - perPage

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
        {label: 'View All', content: characterList.filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
            <Link className='text'to={`/view/characters/${names._id}`}
            style={{fontSize:'50px', margin:'5px'}}
            >{names.name}
            </Link></div>)
        )},
        {label:'A-C', content: characterList.filter(name=>regAtoC.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}}).map((names, index)=>(
        <div key={index}>
            <Link className='text' to={`/view/characters/${names._id}`} style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
            </div>
        ))
        },
        {label:'D-F', content: characterList.filter(name=>regDtoF.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}}).map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'G-I', content: characterList.filter(name=>regGtoI.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'J-L', content: characterList.filter(name=>regJtoL.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'M-O', content: characterList.filter(name=>regMtoO.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'P-R', content: characterList.filter(name=>regPtoR.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'S-U', content: characterList.filter(name=>regStoU.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
        ))},
        {label:'V-Z', content: characterList.filter(name=>regVtoZ.exec(name.name)).filter((name)=>{               
            if (search === ''){
            return name}
        else if (
            name.name.toLowerCase().includes(search)){
            return name}})
            .map((names, index)=>(
            <div key={index}>
                <Link className='text' to={`/view/characters/${names._id}`}style={{fontSize:'50px', margin:'5px'}}>{names.name}</Link>
                </div>
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
    
        const setSelectedTab = (tabIndex) => {
            setActiveTab(tabIndex);
            setCurrentPage(1)

        }
        return(
            <div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'30px'}}>
                    {allTabs.map((item, tabIndex) => (
            <div key={tabIndex} className={`tab ${ tabStyle(tabIndex) }`} onClick={()=>setActiveTab(tabIndex)}>
                { item.label }
            </div>
        ))
                    }
            <input placeholder = 'Search by name ...' 
            type='text'
            onChange={(e)=>setSearch(e.target.value)}/>
            </div>    

         {/* <ViewAlphabetically allTabs={allTabs} currentTabIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex} /> */}            
            <Results 
            tabText={alphArray[activeTab].content} 
            currentPage={currentPage} 
            perPage={perPage}/>
            <Pagination 
            characterList={alphArray[activeTab].content}
            perPage={perPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}/>
        </div>
    )
}

export default Characters