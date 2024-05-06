import React, { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(postListData);
  
  return (
    <div>
      {postList.map((post)=>(
        <Post key={post.id} post={post}/>

      ))}
      
    </div>
  );
};

export default PostList;
