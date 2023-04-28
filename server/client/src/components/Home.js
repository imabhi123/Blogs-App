import React from "react";
import Blogs from "./Blogs";

const Home = (props) => {
  props.setFlag(false);
  return (
    <div>
      <Blogs showAlert={props.showAlert} />
    </div>
  );
};

export default Home;
