"use client";
import Backbutton from "@/app/Components/Backbutton";
import ButtonAction from "@/app/Components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Backbutton />
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post One content</p>
    </div>
  );
};

export default BlogDetailPage;
