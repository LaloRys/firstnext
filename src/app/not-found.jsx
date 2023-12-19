import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <section>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link href="/">Go to Home</Link>
      </p>
          
    </section>
  )
}

export default NotFound