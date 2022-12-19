import React from 'react'
import BodyContainer from './component/BodyContainer'
import Navbar from './component/Navbar'
import BodyData from './BodyData'
import './Travels.css'

const App = () => {
  const blogs = BodyData.map(item => {
    return (
      <BodyContainer 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='travel-body-container'>
      {blogs}
      </div>
    </div>
  )
}

export default App
