import axios from 'axios'
import React,{useState,useEffect} from 'react'
import "../Users/user.css"
const User = () => {
    const[List, setList] = useState([])
    useEffect(() => {
            axios.get('http://localhost:8000/api/auth/')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))
        },[]
    )
  console.log(List);
  return (
    <div className='user-container'>
      {List.map((x,index)=>{
        return <div key={index} className='user-inner'>
          <h3 className='User_name'>{x.username}</h3>
          <img src = {require('../../icons/logo.jpg')} alt="img" className = 'user-icon'></img>
          <h5 className='user-cus'>Customer</h5>
        </div>
    })}
    </div>
  )
}

export default User