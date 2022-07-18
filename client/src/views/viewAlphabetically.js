import React from "react"

const ViewAlphabetically=(props)=>{
    const {allTabs, currentTabIndex, setCurrentTabIndex}=props

    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab";
            } else {
            return "nonSelectedTab";
            }
        }
    
        const setSelectedTab = (index) => {
            setCurrentTabIndex(index);
        }

        return(
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'30px'}}>
                {
                    allTabs.map((item, index) => (
            <div key={index} className={`tab ${ tabStyle(index) }`} onClick={()=>setSelectedTab(index)}>
                { item.label }
            </div>
        ))
        }
            </div>
        )
    
}

export default ViewAlphabetically