import React, { useContext, useState } from 'react';
import blogContext from '../context/blogs/blogContext';
const AddBlog = () => {
  const context = useContext(blogContext);
  const { addBlog } = context;
  const [blog, setBlog] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addBlog(blog.title, blog.description, blog.tag);
    setBlog({ title: "", description: "", tag: "" });
  }
  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }
  return (
    <div className='container my-3'>

      <h1>Add a blog</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">title</label>
          <input type="text" className="form-control" onChange={onChange} value={blog.title} id="title" name='title' minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" onChange={onChange} value={blog.description} id="description" name='description' minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" onChange={onChange} value={blog.tag} id="tag" name='tag' minLength={5} required />
        </div>
        <button disabled={blog.title.length < 5 || blog.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Blog</button>
      </form>

    </div>
  )
}

export default AddBlog