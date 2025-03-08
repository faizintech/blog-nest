import { useRef, useState } from "react";

const Post = ({ post, index }) => {
  const [countLike, setCountLike] = useState(0);
  const likeCount = () => {
    setCountLike((currentVal) => {
      return currentVal + 1;
    });
  };

  const Comment = useRef("");


  const [comments, setComment] = useState([]);
  const CreateCommet = (Comment) => {
    if (Comment.current.value !== " ") {
      const newComment = [...comments, Comment.current.value];
      setComment(newComment);
    }
    Comment.current.value = " ";
  };
  return (
    <>
      <div className="blog-post">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-content">{post.content}</p>

        <div className="like-comment-section">
          <button className="like-button" onClick={likeCount}>
            👍 Like
          </button>
          <span className="like-count">{countLike} Likes</span>
        </div>

        <div className="comments-section">
          <h2>Comments</h2>
          <div className="comment-list">
            {comments.map((comment, index) => (
              <p>{comment}</p>
            ))}
          </div>
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              id="commentText"
              ref={Comment}
            />
            <button
              type="submit"
              id="submitComment"
              onClick={(e) => {
                e.preventDefault();
                CreateCommet(Comment);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
