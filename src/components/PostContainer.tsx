import React, { useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(15);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postApi.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postApi.useCreatePostMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  });
  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add post</button>
        {isLoading && <h1>Идёт загрузка</h1>}
        {error && <h1>Что-то пошло не так</h1>}
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
