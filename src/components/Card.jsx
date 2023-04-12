import React,{ useEffect, useState } from "react";
import "./card.css"
import axios from "axios";


export default function Card(){
    
    const [word,setWord] = useState('nothing');
    const [data,setData] = useState();
    const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

    useEffect(() => {
       axios.get(api)
      .then(response => {''
        setData(response.data[0].meanings[0].definitions[0].definition);
      })
      .catch(error => {
        console.log(error);
      });
    },[word])
    console.log(data);

    function handleWordChange(event){
        // console.log(event.target.value);
        setWord(event.target.value)
    }


    return (<>
        <h1 className="app-heading">Dictionary</h1>
        
        <div className="card">

        <p>Enter word:</p>
        <input value={word} onChange={handleWordChange}></input>
            <h1>{word}</h1>
            <h2>{word && data}</h2>
        </div>
    </>)
}