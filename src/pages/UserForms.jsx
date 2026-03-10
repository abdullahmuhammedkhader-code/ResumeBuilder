import React from 'react'
import Userinput from "../components/Userinput"
import Preview from "../components/Preview"
function UserForms() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <Userinput/>
        </div>
        <div className="col-lg-6">
          <Preview/>
        </div>

      </div>
    </div>
  )
}

export default UserForms
