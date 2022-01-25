import React, {useState} from "react";

export default function Home(props){

    const [booksObj, setBooksObj] = useState('');

    function getBooks(){
        console.log('getbooks');
        return {
            1:{
                name:'32',
                actor: 'sdf'
            }
        }
    }
    
   return (
       <div className="page">
           <h1>Home</h1>
       </div>
   )
}