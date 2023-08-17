import React,{useState,useEffect} from 'react';

const Retrivedata=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
        try {
          const res=await fetch('https://travelapi-gbsz.onrender.com/api/get')
          const apidata=await res.json()
          setdata(apidata)
        } catch (error) {
            console.log(error)
        }
    }

    const handledelete=async(id)=>{
        try {
            await fetch(`https://travelapi-gbsz.onrender.com/api/delete/${id}`,{
                method:'DELETE'
            })
            alert('deleted data successfully')
            fetchdata();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            {
                data.map((element)=>(
                 <div key={element.id} className='card'>

                    <h3>Name:{element.name}</h3>
                    <p>Email:{element.email}</p>
                    <p>Destination:{element.destination}</p>
                    <p>Number Of Travelers:{element.travelers}</p>
                    <p>Budget Per Person:{element.budget}</p>
                    <button onClick={()=>handledelete(element._id)}>Delete</button>
                 </div>   
                ))}
        </div>
    )
}

export default Retrivedata

