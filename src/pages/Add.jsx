import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [pet,setPet] = useState({
        title:"",
        desc:"",
        phone: null,
        cover:"",
    })


    const navigate = useNavigate()

    const handleChange = (e) =>{
        setPet(prev=>({...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async e =>{
      e.preventDefault()
      try{
        await axios.post("http://localhost:8800/pets", pet)
        navigate("/")
      }catch(err){
        console.log(err)
      }  
    } 
    console.log(pet)
    return (
        <div className='form'>
            <h1>Add New Pet</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='phone' onChange={handleChange} name="phone"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add