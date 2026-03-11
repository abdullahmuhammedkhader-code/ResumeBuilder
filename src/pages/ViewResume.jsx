import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../Components/Preview';
import Edit from '../Components/Edit';

function ViewResume() {
  return (
    <div className='container'>
      <div className='row my-5'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Icon Set  */}
          <div className="d-flex justify-content-center align-items-center">
          {/* Download */}
          <button className='btn text-primary fs-2 me-2'><FaFileDownload /></button>
          {/* Edit */}
          <Edit/>
          {/* history */}
          <Link to={"/downloads"} className='btn text-danger fs-2 me-2'><IoMdRefresh /></Link>
          {/* back */}
          <Link to={'/forms'} className='btn text-success fs-2 me-2'><FaBackward /></Link>
          </div>
          <div className='mt-5'><Preview/></div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default ViewResume
