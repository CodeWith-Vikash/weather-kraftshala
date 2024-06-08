import React from 'react'
import './load.css'

const Skeleton = () => {
  return (
    <div className='skeleton'>
      <div className="row1"></div>
      <div className="rows">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      </div>
      <div className="row2"></div>
    </div>
  )
}

export default Skeleton