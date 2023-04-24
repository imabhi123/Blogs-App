import React from 'react'
import Blogs from './Blogs'

const Home = (props) => {
  return (
    <div>
   
    <Blogs showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
