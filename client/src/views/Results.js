import React from "react";


const Results=(props)=>{
    const { tabText, currentPage, perPage } = props;
    const lastSplitItem = currentPage * perPage
    const firstSplitItem = lastSplitItem - perPage

    return (
        <div className="results">
            <h1>List of Characters</h1>
            {tabText}
        </div>
    )
    
}

export default Results