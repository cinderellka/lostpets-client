import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [pet,setPet] = useState({
        title:"",
        desc:"",
        phone: null,
        cover:"",
    })


    const navigate = useNavigate()
    const location = useLocation()
    const PetId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setPet(prev=>({...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async e =>{
      e.preventDefault()
      try{
        await axios.put("http://localhost:8800/pets/" + PetId, pet)
        navigate("/")
      }catch(err){
        console.log(err)
      }  
    } 
    console.log(pet)
    return (
        <div className='form'>
            <h1>Update the Pet</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"/>
            <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
            <input type="number" placeholder='phone' onChange={handleChange} name="phone"/>
            <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update