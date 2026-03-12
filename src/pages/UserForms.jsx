import React  from 'react'
import Userinput from "../Components/Userinput"
import Preview from '../Components/Preview'
import { useState } from 'react'


function UserForms() {
   const [resumeData,setResumeData] = useState({
          fullName:"",
          location:"",
          job:"",
          email:"",
          phone:"",
          linkedin:"",
          github:"",
          degree:"",
          university:"",
          passOut:"",
          skills:[],
          summary:""
      })
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <Userinput resumeData={resumeData} setResumeData={setResumeData} />
        </div>
        <div className="col-lg-6">
          {resumeData.fullName && <Preview resumeData={resumeData} />}
        </div>

      </div>
    </div>
  )
}

export default UserForms
