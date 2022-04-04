import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";

const Login = () => {

    const [name,setName]=useState('');
    console.log(name)
    // let navigate = useNavigate();
    const handler=()=>{
        navigate(`/Chips/${name}`);
        // console.log(id,"id")

    }
  return (
   <>
        <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              id='name'
              name="name1"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <button className=" btn-primary btn-block" onClick={handler}>Login</button>
   </>
  )
}

export default Login