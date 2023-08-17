import React,{useState} from "react";


const Postdata=()=>{
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        destination:"",
        travelers:"",
        budget:""

    })

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setformdata((pdata)=>({...pdata,[name]:value}))
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            await fetch('https://travelapi-gbsz.onrender.com/api/post',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formdata)
            })
            alert('data added successfully')
            window.location.reload();
            setformdata({
                name:"",
                emai:"",
                destination:"",
                travelers:"",
                budget:""
            })

        } catch (error) {
            console.log(error)
        }
    }

    return( 
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name="name" placeholder="enter name" value={formdata.name} onChange={handlechange} />
                <input type="text" name="email" placeholder="enter email" value={formdata.email} onChange={handlechange} />
              <select name="destination"  value={formdata.destination} onChange={handlechange}>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
              </select>
                <input type="text" name="travelers" placeholder="enter number of travelers" value={formdata.travelers} onChange={handlechange} />
                <input type="text" name="budget" placeholder="enter budget price" value={formdata.budget} onChange={handlechange} />
                <button type="submit">Submit</button>
    
            </form>
        </div>
    )
}



export default Postdata;