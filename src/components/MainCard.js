import React, { useContext } from "react";
import blogContext from "../context/blogs/blogContext";
const MainCard = ({ setFlag }) => {
  const title=localStorage.getItem('item');
  const {blogs}=useContext(blogContext);
  let mainBlog=[];
  for(let i=0;i<blogs.length;i++){
    if(blogs[i].title===title){
      mainBlog=blogs[i];
    }
  }
  console.log(mainBlog)
  setFlag(true);
  return (
    <>
      <div className="card mx-md-3">
        <div id="content" className="content p-0">
          <div className="profile-header">
            <div className="profile pt-3 row">
              <div className="profile-img px-3 col-6 d-flex content-align-justify justify-content-evenly align-items-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  className="rounded-pill"
                  style={{ width: "3em" }}
                  alt=""
                />

                <div className="profile-info col-7">
                  <h6 className="m-t-sm">{mainBlog.title}</h6>
                  <p className="fs-6 d-flex">
                    <span className="text-dark fw-bold">22 Dec </span>
                    &nbsp;.&nbsp;{" "}
                    <span className="text-dark "> 3 min read </span> &nbsp;
                    &nbsp;{" "}
                    <span className="text-success">
                      {" "}
                      <i className="fa-regular fa-circle-play"></i>{" "}
                    </span>
                    &nbsp; &nbsp; <span className="text-success"> 31:29 </span>
                  </p>
                </div>
              </div>
              <div className="profile-img  col-6 mb-5 d-flex justify-content-end px-3">
                <p className="text-muted me-3">
                  <i className="fa-brands fa-linkedin me-3"></i>
                  <i className="fa-brands fa-facebook me-3"></i>
                  <i className="fa-brands fa-twitter me-3"></i>
                </p>
                <span className="text-dark">
                  <i className="fa-solid fa-link mx-2"></i>
                  <i className="fa-regular fa-bookmark mx-2"></i>
                </span>
              </div>
            </div>
          </div>
          <h3 className="px-5">How to become financial independet?</h3>
        </div>
        <img
          className="card-img-top m-auto"
          src={mainBlog.imgUrl}
          alt="Cardimage-cap"
          style={{ width: "80em", height: "40em" }}
        />
        <div className="card-body">
          <h5 className="card-title">{mainBlog.title_2}</h5>
          <p className="card-text text-justify m-0 p-0">
            {mainBlog.description}
          </p>{" "}
          <br />
          <p className="card-text text-justify m-0 p-0 ">
           {mainBlog.description_2}
          </p>
          <h5 className="card-title mt-5">{mainBlog.title_3}</h5>
          <p className="card-text text-justify m-0 p-0">
            {mainBlog.description_3}
          </p>{" "}
          <br />
          <p className="card-text text-justify m-0 p-0 ">
            {mainBlog.description_4}
          </p>
          <div className=" row d-flex mt-md-5">
            <p className="bg-secondary btn btn-sm col-md-2 text-dark fw-bold border-0 mx-1">
              {" "}
              Financial Independent
            </p>
            <p className="bg-secondary btn btn-sm col-md-2 text-dark fw-bold border-0 mx-1">
              {" "}
              Finance
            </p>
            <p className="bg-secondary btn btn-sm col-md-2 text-dark fw-bold border-0 mx-1">
              {" "}
              Invest
            </p>
            <p className="bg-secondary btn btn-sm col-md-2 text-dark fw-bold border-0 mx-1">
              {" "}
              Ideas
            </p>
            <p className="bg-secondary btn btn-sm col-md-2 text-dark fw-bold border-0 mx-1">
              {" "}
              Self Improve
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-6 d-flex">
              <p className="text-dark mx-3">
                <a href=" " className="text-decoration-none text-dark">
                  <i className="fa-regular fa-thumbs-up mx-2"></i>
                </a>
                1.7k Likes
              </p>
              <p className="text-dark mx-3">
                <a href=" " className="text-decoration-none text-dark">
                  <i className="fa-regular fa-comment mx-2"></i>
                </a>
                1.9k Respond
              </p>
              <p className="text-dark mx-3">
                <a href=" " className="text-decoration-none text-dark">
                  <i className="fa-solid fa-share-nodes mx-2"></i>
                </a>
                1.7k Share
              </p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <span className="text-dark">
                <i className="fa-solid fa-link mx-2"></i>
                <i className="fa-solid fa-download mx-2"></i>
                <i className="fa-regular fa-bookmark mx-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-3">
        <h3>More form making you millionair</h3>

        {/* <Card/> */}
      </section>
    </>
  );
};

export default MainCard;
