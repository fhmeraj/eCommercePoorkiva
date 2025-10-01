import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Login = ({open,setOpen}) => {
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

  return (
 <>


  <Modal
  open={open}
  onClose={()=>setOpen(false)}
 
>

  <Box sx={{ ...style, width: 800 }}>

<div className='w-[100%] h-full flex'>
  <div className='w-[50%] h-full flex items-center justify-center'>
    <img src='https://img.poorvika.com//login-img.jpeg'/>
  </div>
  <div className='w-[50%] h-full flex flex-col items-center justify-center space-y-6 px-8'>
      <p className='font-semibold'>Sign in</p>
      <p className='text-gray-400'>To access your Order easily</p>
      <div className='flex flex-col'>
        <label className='text-xs font-bold'>Email / Mobile Number *</label>
        <input placeholder="Email / Mobile Number" class="placeholder:text-xs mt-1 block w-full px-16 py-2 border hover:ring-1 hover:ring-red-500 border-gray-400 rounded-md shadow-sm "/>
      </div>
      <div className='flex flex-col'>
        <label className='text-xs font-bold'>Password</label>
        <input placeholder="Password" class="placeholder:text-xs mt-1 block w-full px-16 py-2 border hover:ring-1 hover:ring-red-500 border-gray-400 rounded-md shadow-sm "/>
      </div>
      <div className='w-full h-full flex justify-between '>
        <p className='text-[10px]'>Register</p>
        <p className='text-[10px]'>Forgot Password ?</p>
      </div>
      <div className='flex flex-col items-center justify-center space-y-3'>
          <button className='bg-orange-600 px-32 py-2 rounded text-white shadow-3xl'><h1>LOGIN</h1></button>
      <p>Or</p>
      <button className=' px-32 py-2 rounded border border-gray-200  shadow-2xl'><h1>LOGIN</h1></button>

      </div>
        </div>
</div>
</Box>


</Modal>
 </>
  )
}

export default Login
