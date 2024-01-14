import React from 'react'

const ProcessCards = ({ children }) => {
  return (
    <div className='process_cards'>
      {
        children.map((child) => (
          <div key={child.title} className='process_card h-[400px] w-[300px] flex flex-col items-center justify-center mx-auto'>
            <div className='process_card-img'>
              {child.svg}
            </div>
            <div className='process_card-text px-5'>
              <h4 className='mt-5 text-2xl'>{child.title}</h4>
              <p className='mt-5 text-xs leading-5'>{child.content}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProcessCards