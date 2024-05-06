import React, { useContext } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card post-card">
            <div className="card-body">
              <h5 className="card-title">
                {post.title}
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  onClick={() => deletePost(post.id)}
                >
                  <FcDeleteDatabase />
                </span>
              </h5>
              <p className="card-text">{post.body}</p>

              {post.tags.map((tag) => (
                <span className="badge text-bg-primary hashtag" key={tag}>
                  {tag}
                </span>
              ))}

              <div className="alert alert-success reactions" role="alert">
                This post has been reacted by {post.reactions} people.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
