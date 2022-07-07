import React from "react";


const Results=(props)=>{
    const { tabText } = props;

    return (
        <div className="results">
            <h1>List of Characters</h1>
            {tabText}
        </div>
    )
    
}

export default Results