"use client";

import FormPost from "@/app/Components/FormPost";
import { FormInputPost } from "@/app/types";
import { SubmitHandler } from "react-hook-form";

const EditPostpage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-3xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing = {true} />
    </div>
  );
};

export default EditPostpage;
