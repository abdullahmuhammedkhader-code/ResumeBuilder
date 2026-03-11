import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'; // Import the desired icon
import { Link } from 'react-router-dom'; // Import Link for navigation

function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '150px' }}>
      <FaExclamationTriangle style={{ fontSize: '100px', color: '#ffc107' }} /> {/* Use the icon component */}
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        Go to Home Page
      </Link>
    </div>
  )
}

export default PageNotFound
