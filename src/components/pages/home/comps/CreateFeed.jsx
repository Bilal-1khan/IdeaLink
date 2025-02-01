import React from "react";
import { CreatePost, IdeaFeedCard } from "../../../index";

const CreateFeed = () => {
  return (
    <div className="feedPanel flex flex-col items-center max-sm:w-full">
      <CreatePost />
      <div className="feed my-6 flex flex-col items-center gap-4">
        <IdeaFeedCard />
      </div>
    </div>
  );
};

export default CreateFeed;
