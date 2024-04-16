import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [user, setUser] = useState([]);
    
    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        <div className='container'>
            <table className='table table-info table-striped'>
                    <thead>
                            <tr>
                                <th>PH NO</th>
                                <th>NAME</th>
                                <th>CITY</th>
                                <th>ACTION</th>
                            </tr>
                    </thead>  
                    <tbody>
                        {
                            user.map((obj)=>{
                                return(
                                    <tr>
                                        <td>{obj.ph}</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.city}</td>
                                        <td>
                                            <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                            <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>DELETE</button></NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>  
            </table>
        </div>
    </>
  )
}

export default Show