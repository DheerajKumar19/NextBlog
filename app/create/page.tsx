"use client";

import { SubmitHandler } from "react-hook-form";
import FormPost from "../Components/FormPost";
import { FormInputPost } from "../types";
import Backbutton from "../Components/Backbutton";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Backbutton/>
      <h1 className="text-3xl my-4 font-bold text-center">Add new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
