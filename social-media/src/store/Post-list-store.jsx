import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.Id !== action.playload.postId
    );
  }else if(action.type === "ADD_POST"){
     {
         newPostList = [action.playload, ...currPostList]
         console.log(newPostList);
     }
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      playload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags:tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_ITEM",
      playload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Go to Mumbai",
    body: "Hi friedns Lorem odfigdfg erhter trejtioew",
    reactions: 9,
    userId: "user-9",
    tags: ["vacation", "CTG", "Enjoy"],
  }
];
export default PostListProvider;
