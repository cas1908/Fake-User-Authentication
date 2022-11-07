import React from 'react'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <nav>
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/verify">Verify account</Link>
</nav>
  )
}

export default Navigation