import { useRef } from "react";
const CreatePost = ({ createPost }) => {
  const Title = useRef("");
  const Content = useRef("");
  return (
    <form className="create-post">
      <h1>Create a Post</h1>
      <input
        type="text"
        aria-label="Post-Titel"
        id="PostTitle"
        placeholder="Title"
        ref={Title}
      />
      <textarea
        id="postContent"
        placeholder="Write your post here..."
        rows="4"
        style={{ width: " 100%", fontSize: "1rem" }}
        ref={Content}
      ></textarea>
      <button
        type="submit"
        className="btn"
        onClick={(e) => createPost(e, Title, Content)}
      >
        Post
      </button>
    </form>
  );
};
export default CreatePost;
