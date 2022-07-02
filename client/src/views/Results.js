import React from "react";


const Results=(props)=>{
    const { allTabs, currentTabIndex } = props;

    return (
        <div className="results">
            <h1>List of Characters</h1>
            <p>{allTabs[currentTabIndex].content}</p>
        </div>
    )
    
}

export default Results