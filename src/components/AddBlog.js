import React, { useContext, useState } from "react";
import blogContext from "../context/blogs/blogContext";
const AddBlog = ({ setFlag }) => {
  setFlag(true);
  const context = useContext(blogContext);
  const { addBlog } = context;
  const [blog, setBlog] = useState({
    title: "",
    imgUrl: "",
    title_2: "",
    description: "",
    title_3: "",
    description_2: "",
    title_4: "",
    description_3: "",
    title_5: "",
    description_4: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(blog)
    addBlog(blog.title, blog.imgUrl, blog.title_2,blog.description,blog.title_3,blog.description_2,blog.title_4,blog.description_3,blog.title_5,blog.description_4,blog.tag);
    setBlog({
      title: "",
      imgUrl: "",
      title_2: "",
      description: "",
      title_3: "",
      description_2: "",
      title_4: "",
      description_3: "",
      title_5: "",
      description_4: "",
      tag: "",
    });
  };
  const onChange = (e) => {
    console.log(blog);
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card" style={{ height: "120vh", width: "40vw" }}>
            <div
              className="justify-content-center form_container mx-5"
              style={{ color: "black", marginTop: "0px" }}
            >
              <form>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Enter the Title of the blog
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control input_user"
                    defaultValue=""
                    placeholder="title"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Enter Image Url
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="imgUrl"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Title 2
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="title_2"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Description
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="description"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Title 3
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="title_3"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Description 2:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="description_2"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Title 4:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="title_4"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Description 3:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="description_3"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Title 5:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="title_5"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Description 4:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="description_4"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <label
                  style={{ fontSize: "10px", fontWeight: "700" }}
                  htmlFor="email"
                >
                  Tags:
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    name="tag"
                    className="form-control input_pass"
                    defaultValue=""
                    placeholder="text"
                    onChange={onChange}
                  />
                </div>
                <div className=" justify-content-center mt-3 login_container">
                  <button
                    type="button"
                    name="button"
                    className="btn login_btn"
                    onClick={handleClick}
                    style={{ backgroundColor: "#198754" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
