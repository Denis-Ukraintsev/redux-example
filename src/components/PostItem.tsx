import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post: IPost }) => {
  return (
    <div className="post">
      {IPost.id}. {IPost.title}
      <button>Delete</button>
    </div>
  );
};

export default PostItem;
