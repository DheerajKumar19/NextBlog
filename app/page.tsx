import React from "react";
import Navbar from "./Components/Navbar";
import PostCard from "./Components/PostCard";

const page = () => {
  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
};

export default page;
