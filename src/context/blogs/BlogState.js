import { useState } from 'react'
import BlogContext from './blogContext'
const BlogState=(props)=>{
  const host="http://localhost:5000"
    const blogsInitial=[]
      const [blogs,setBlogs]=useState(blogsInitial);
      //get All Blogs
      const getBlog=async()=>{
        //API call
        const response=await fetch(`${host}/api/blogs/fetchallblogs`,{
          method:'GET',
          headers:{
            'Content-Type':'Application/json',
            'auth-token':localStorage.getItem('token')
          }
        })
        const json=await response.json();
        setBlogs(json);
      }
      //Add a Blog
      const addBlog=async(title,description,tag)=>{
        const response=await fetch(`${host}/api/blogs/addblog`,{
          method:'POST',
          headers:{
            'Content-Type':'Application/json',
            'auth-token':localStorage.getItem('token')
          },
          body:JSON.stringify({title,description,tag})
        })
        const blog=await response.json();
        setBlogs(blogs.concat(blog));
      }
      //Delete a Blog
      const deleteBlog=async(id)=>{
        const response=await fetch(`${host}/api/blogs/deleteblog/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'Application/json',
            'auth-token':localStorage.getItem('token')
          },
        })
        const newBlog=blogs.filter((blog)=>{
        return  blog._id!==id;
        })
        setBlogs(newBlog);
      }
      //edit blog
      const editBlog=async(id,title,description,tag)=>{
        const response=await fetch(`${host}/api/blogs//updateblog/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'Application/json',
            'auth-token':localStorage.getItem('token')
          },
          body:JSON.stringify({title,description,tag})
        })
        const json=response.json();
        let newBlogs=JSON.parse(JSON.stringify(blogs))
        for(let i=0;i<newBlogs.length;i++){
          const element=newBlogs[i];
          if(element._id===id){
            newBlogs[i].title=title;
            newBlogs[i].description=description;
            newBlogs[i].tag=tag;
            break;
          }
        }
        setBlogs(newBlogs)
      }
return(
    <BlogContext.Provider value={{blogs,setBlogs,addBlog,deleteBlog,editBlog,getBlog}}>
        {props.children}
    </BlogContext.Provider>
) 
}
export default BlogState;