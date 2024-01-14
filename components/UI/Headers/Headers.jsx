import React from 'react'

const Headers = ({ title, content }) => {
  return (
    <div className="header flex flex-col justify-center items-center mt-5">
      <h1 className="font-normal capitalize">{title}</h1>
      <p className="text-base mt-3">{content}</p>
    </div>
  )
}

export default Headers