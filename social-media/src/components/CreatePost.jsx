import React, { useContext, useRef } from "react";
import {PostList} from '../store/Post-list-store'

const CreatePost = () => {
  const {addPost} = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  
const handleSubmit = (event) =>{
     event.preventDefault();
     const userId = userIdElement.current.value;
     const postTitle = postTitleElement.current.value;
     const postBody = postBodyElement.current.value;
     const reactions = reactionsElement.current.value;
     const tags = tagsElement.current.value.split(' ')

     addPost(userId, postTitle, postBody, reactions, tags);

     userIdElement.current.value="";
     postTitleElement.current.value="";
     postBodyElement.current.value="";
     reactionsElement.current.value="";
     tagsElement.current.value="";
     
     



}
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter Your User Id:</label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter Your User ID"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How you're feeling today..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <textarea
          rows="4"
          ref={postBodyElement}
          className="form-control"
          id="content"
          placeholder="Tell me about your feelings..."
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Reactions</label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Many people react to this..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter You Hashtag</label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="#tag... "
        />
      </div>
      <button type="submit" className="btn btn-primary">
         Post
      </button>
    </form>
  );
};

export default CreatePost;
