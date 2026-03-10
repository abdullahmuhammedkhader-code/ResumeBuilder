import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom"

function ResumeSteps() {
  return (
    <div className='my-5'>
      <h1 className="text-center">Create a Job Winning Resume In Minutes</h1>
      <div className='container'>
        <div className="row my-5">
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
            <IoDocumentTextSharp className='fs-1 text-primary mb-3'/>
            <h4>Add you Details</h4>
            <p>Add pre-written examples to each section</p>
            <h5>Step-1</h5>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 shadow text-center" >
            <FaDownload className='fs-1 text-primary mb-3' />
             <h4>Download your Resume</h4>
            <p>Download and start applying</p>
            <h5>Step-2</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className='text-center mt-5'>
          <Link to={'/forms'} className='btn text-light' style={{backgroundColor:"rgba(116,102,89,0.7)"}}>Lets Start</Link>
        </div>
      </div>
    </div>
  )
}

export default ResumeSteps
