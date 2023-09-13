'use client'
import React from 'react'

interface Props {
  error: Error;
  reset: () => void;  // nextjs will automatically pass the reset fn to our component
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error ', error)
  return (
    <>
      <div>An unexpected error has occcurred.</div>
      {/* Adding a retry option for an error */}
      <button className='btn' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage