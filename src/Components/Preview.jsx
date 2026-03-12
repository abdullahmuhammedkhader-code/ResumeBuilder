import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';


function Preview({resumeData}) {
  return (
    <div className=' w-100'>
      <h2>{resumeData?.fullName}</h2>
      <p className='fs-6'>Phone: {resumeData?.phone}</p>
      <p className='fs-6'>Email: {resumeData?.email} </p>
      <p className='fs-6'>LinkedIn:  <a href="{resumeData?.linkedin}">{resumeData?.linkedin}</a> </p>
      <p className='fs-6'>Git-Hub: <a href="{resumeData?.github}">{resumeData?.github}</a></p>
      <p className='fs-6'>Location: {resumeData?.location}</p>
    <Divider className='bg-dark '/>
    <h4 className='mt-3'>Professional Summary</h4>
    <p>{resumeData?.summary}</p>
    <Divider className='bg-dark '/>
    <h4 className='mt-3'>Technical Skills</h4>
    {/* Duplicate according to user skills */}
    {resumeData?.skills?.map((item,index)=>{
      <Button key={index} variant="outlined" className='text-dark border-dark m-1'>{item}</Button>
    })}
    <Divider className='bg-dark my-3'/>
    <h4 className='mt-3'>Education</h4>
    <p>Bachelors Degree in : {resumeData?.degree}</p>
    <p>Unversity / College :  {resumeData?.university}</p>
    <p>Year of Graduation : {resumeData?.passOut} </p>

    <Divider className='bg-dark '/>
    </div>
  )
}

export default Preview
