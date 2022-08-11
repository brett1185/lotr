import React, {useState} from "react";


const Results=(props)=>{
    const { tabText, currentPage } = props;
    const perPage=10
    const lastSplitItem = currentPage * perPage
    const firstSplitItem = lastSplitItem - perPage

    return (
        <div className="results">
            <h1>List of Characters</h1>
            {tabText.slice(firstSplitItem, lastSplitItem)}
        </div>
    )
    
}

export default Results