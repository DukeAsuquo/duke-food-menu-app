import React from 'react'

const Title = ({text}) => {
  return (
   <main>
     <div className='title'><h2>{text || "default title"}</h2></div>
    <div className='title-underline '></div>
   </main>
  )
}

export default Title