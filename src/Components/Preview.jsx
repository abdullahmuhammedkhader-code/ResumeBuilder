import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';


function Preview() {
  return (
    <div className=' w-100'>
      <h2>Full Name:</h2>
      <p className='fs-6'>Phone: </p>
      <p className='fs-6'>Email: </p>
      <p className='fs-6'>LinkedIn: <a href="">url</a> </p>
      <p className='fs-6'>Git-Hub: <a href="">url</a></p>
      <p className='fs-6'>Location: </p>
    <Divider className='bg-dark '/>
    <h4 className='mt-3'>Professional Summary</h4>
    <p>summary</p>
    <Divider className='bg-dark '/>
    <h4 className='mt-3'>Technical Skills</h4>
    {/* Duplicate according to user skills */}
    <Button variant="outlined">Skills</Button>
    <Divider className='bg-dark my-3'/>
    <h4 className='mt-3'>Education</h4>
    <p>Bachelors Degree in :</p>
    <p>Unversity / College :</p>
    <p>Year of Graduation :</p>

    <Divider className='bg-dark '/>
    </div>
  )
}

export default Preview
