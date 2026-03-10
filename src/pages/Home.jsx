import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Landing */}
      <div style={{ height: "100vh", backgroundImage: 'url("/BusinessMeeting.png")', backgroundSize: 'cover', backgroundPosition: "center", backgroundAttachment: "fixed" }} className='d-flex justify-content-center align-items-center'>
        <div className="row container-fluid">
          <div className="col-lg-4">

          </div>
          <div className="col-lg-4 rounded shadow p-5 text-center text-light" style={{ backgroundColor: "rgba(116,102,89,0.7)" }}>
            <h3>Designed to get hired.
              Your Skills, Your Story,
              Your Next Job - All in One
            </h3>
            <Link to={'/steps'} className='btn text-light m-3' style={{ backgroundColor: "rgba(160,151,138)" }}>
              MAKE YOUR RESUME
            </Link>
          </div>
          <div className="col-lg-4">

          </div>
        </div>
      </div>
      {/* Tooling */}
      <div className="container">
  <h1 className="text-center my-2">Tools</h1>

  <div className="row align-items-center">
    <div className="col-lg-1"></div>

    <div className="col-lg-5">
      <h5>Resume</h5>
      <p>Create unlimited new resumes and easily edit them afterwards.</p>
      <h5>Cover Letters</h5>
      <p>Easily write professional cover letters.</p>
      <h5>Jobs</h5>
      <p>Automatically receive new and relevant job postings.</p>
      <h5>Applications</h5>
      <p>Effortlessly manage and track your job applications in an organized manner.</p>
    </div>

    <div className="col-lg-1"></div>

    <div className="col-lg-5">
      <img
        style={{ width: "100%", height: "500px" }}
        src="/toolsimg.png"
        alt=""
      />
    </div>
  </div>
</div>
{/* Image */}
<div style={{height:"80vh",backgroundImage:'url("/team.png")',backgroundSize:'cover', backgroundPosition:"center",backgroundAttachment:'fixed'}}>
</div>
{/* Testimony */}
      <div className="container">
  <h1 className="text-center my-3">Testimony</h1>

  <div className="row align-items-center">
    <div className="col-lg-1"></div>

    <div className="col-lg-5">
      <h3>Trusted by professionals worldwide.</h3>
      <p>At LiveCareer, we don't just help you create résumés — we help you land the job. </p> <p>Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
<p>
  In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
  Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out
</p>
      
    </div>

    

    <div className="col-lg-6">
      <div className='row'>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
       <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
       <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>
        <div className="col-lg-3 m-3"><img style={{width:"150px"}} src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" /></div>

      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Home
