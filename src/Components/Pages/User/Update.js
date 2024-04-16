import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('ph', result.data.ph);
        setValue('name', result.data.name);
        setValue('city', result.data.city);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`);
        navi('/show')
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <div className='container w-50 mt-5'>
        <center><u><h2>PHONE UPDATE DIRECTORY</h2></u></center>
        <form onSubmit={handleSubmit(saveData)} className='mt-5'>
                <label htmlFor='p'><b>PHONE NO</b></label>
                <input type='number' id='p' className='form-control' {...register('ph')}/>
                <br /> <br />

                <label htmlFor='n'><b>NAME</b></label>
                <input type='text' id='n' className='form-control' {...register('name')} />
                <br /> <br />

                <label htmlFor='c'><b>CITY</b></label>
                <input type='text' id='c' className='form-control' {...register('city')} />
                <br /> <br />

                <input type='submit' value="UPDATE PHONE" className='btn btn-outline-success col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
</>
  )
}

export default Update