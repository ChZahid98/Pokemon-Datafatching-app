import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Comp = ()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState(); 
    const [moves, setMoves]=useState();

    
    useEffect (()=>{

        async function getdata(){
            
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }

        getdata();
    });

    return(
       
        <>
         <h1> You Choose <span style={{color:'red'}}> {num} Value </span> </h1>
         <h1> My Name is <span style={{color:'red'}}> {name}  </span> </h1>
         <h1> I Have <span style={{color:'red'}}> {moves} Moves  </span> </h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value);
        }}> 
            <option value='1'> 1 </option>
            <option value='25'> 25 </option>
            <option value='3'> 3 </option>
            <option value='4'> 4 </option>
            <option value='5'> 5 </option>
        </select>
        </>
    );
};

export default Comp;

