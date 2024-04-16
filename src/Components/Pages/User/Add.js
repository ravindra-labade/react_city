import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data);
        navi('/show')
    }
  return (
    <>
        <div className='container w-50 mt-5'>
            <center><u><h2>PHONE DIRECTORY</h2></u></center>
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

                    <input type='submit' value="ADD PHONE" className='btn btn-outline-success col-6' />
                    <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>
    </>
  )
}

export default Add