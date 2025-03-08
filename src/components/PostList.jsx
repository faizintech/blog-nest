import Post from "./Post";
import { Context } from "../store/context";
import { useContext } from "react";
import SearchBar from "../components/SearchBar";
const PostList = () => {
  const { filterPostList } = useContext(Context);
  return (
    <>
    <SearchBar />
      {filterPostList.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};
export default PostList;
