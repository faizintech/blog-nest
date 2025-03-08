import Post from "./Post";
const PostList = ({ postList }) => {
  return (
    <>
      {postList.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};
export default PostList;
