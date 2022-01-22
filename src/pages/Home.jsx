import React, {useState} from "react";

export default function Home(props){
    
    
    return (!props.logIn)? (
        <div className="page">
            <h1>Home</h1>
        </div>
    ) : (
        <div className="page">
            <h1>Home admin</h1>
        </div>
    )
}