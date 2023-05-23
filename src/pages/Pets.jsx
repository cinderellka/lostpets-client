import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Pets = () => {

    const [pets,setPets] = useState([])

    useEffect(()=>{
        const fechAllPets = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/pets")
                setPets(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fechAllPets()
    },[])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/pets/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div >
            <h1>Lost Pets</h1>
        <button className="add"><Link to="/add">Add new pet</Link></button>
        <div className="pets">
            {pets.map((pet) => (
                <div className="pet" key={pet.id}>
                    <img src={pet.cover} alt="" />
                    <h2>{pet.title}</h2>
                    <p>{pet.desc}</p>
                    <p>{pet.phone}</p>
                    <button className="delete" onClick={()=>handleDelete(pet.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${pet.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        
        </div>
    )
}

export default Pets