
import { useState } from "react";
import "../styles/Addgen.css";

function GeneralInfo({info,setInfo}){
    return (
        <div className="container">
            <div className="gi">
                    <p>General Information</p>
                    <input type="text"   onChange={(event) => setInfo({...info, name:event.target.value})}/>
                    <input type="text"   onChange={(event) => setInfo({...info, age:event.target.value})}/>
                    <input type="text"   onChange={(event) => setInfo({...info, gender:event.target.value})}/>
            </div>
            
        </div>
        
    )
}

function DisplayInfo({ info }) {
    return (
        <div className="display">
            <h3>Entered Info:</h3>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            <p>Gender: {info.gender}</p>
        </div>
    );
}

function Comp(){
    const [info , setInfo] = useState({
        name: 'Swayam',
        age: '21',
        gender: 'Male'
  });

    return(
       <div className="display">
        <GeneralInfo info ={info} setInfo={setInfo}>
        </GeneralInfo> 
        <DisplayInfo info = {info}></DisplayInfo>
        
       </div>
    )
}

export {Comp, GeneralInfo};