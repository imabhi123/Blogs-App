import React, { useContext, useEffect, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogContext from '../context/blogs/blogContext';
import AddBlog from './AddBlog';
import BlogItem from './BlogItem';
const Blogs = (props) => {
  const context = useContext(blogContext);
  const { blogs, getBlog,editBlog} = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  let history=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
    getBlog();
    }
    else {
      console.log(localStorage.getItem('token'))
      history("/login");
    }
    // eslint-disable-next-line 
  }, [])
  const updateBlog = (currBlog) => {
    ref.current.click();
    setBlog({id:currBlog._id, etitle:currBlog.title,edescription:currBlog.description,etag:currBlog.tag});
    props.showAlert("Blog Updated","successful");
  }
  const [blog, setBlog] = useState({id:"", etitle: "", edescription: "", etag: "" });
  const handleClick = (e) => {
    console.log("updating the blog",blog)
    editBlog(blog.id,blog.etitle,blog.edescription,blog.etag);
    refClose.current.click();
  }
  const onChange=(e)=>{
    setBlog({...blog,[e.target.name]:e.target.value});
  }
  return (
    <div>
      <AddBlog showAlert={props.showAlert}/>
      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Blog</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">title</label>
          <input type="text" className="form-control" onChange={onChange} id="etitle" name='etitle' value={blog.etitle} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">Description</label>
          <input type="text" className="form-control" onChange={onChange} id="edescription" name='edescription' value={blog.edescription}minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">Tag</label>
          <input type="text" className="form-control" onChange={onChange} id="etag" name='etag' value={blog.etag}/>
        </div>
      </form> 
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleClick} className="btn btn-primary">Update Blog</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Blogs</h2>
        <div  className="container mx-24">
          {blogs.length===0&&'No blogs to display'}
        </div>
        {blogs.map((blog) => {
          return <BlogItem blog={blog} updateblog={updateBlog} key={blog._id} />;
        })}
      </div>
    </div>
  )
}

export default Blogs
