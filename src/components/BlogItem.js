import React from 'react'
import { useContext } from 'react';
import blogContext from '../context/blogs/blogContext';

const Blogitem = (props) => {
  const context=useContext(blogContext)
  const {deleteBlog}=context;
    const {blog,updateblog}=props;
  return (
      <div className="col-md-3">
        <div className="card my-3">
        <div className='card-body'>
            <h2 className='card-title'>{blog.title}</h2>
            <p className='card-text'>{blog.description}</p>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteBlog(blog._id)}}></i>
            <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updateblog(blog)}}></i>
        </div>
      </div>
      </div>
  )
}

export default Blogitem
