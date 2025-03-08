import CreatePost from "./CreatePost";
import PostList from "./PostList";
import SideBar from "./SideBar";
import { useContext } from "react";
import { Context } from "../store/context";
import Message from "./Message";

const Container = () => {
  const { activeBtn, createPost, filterPostList } = useContext(Context);
  return (
    <div className="container">
      <div className="main-content">
        {activeBtn === "Home" ? (
          <PostList />
        ) : (
          <CreatePost createPost={createPost} />
        )}
        {filterPostList.lenght === " " && <Message />}
      </div>
      <SideBar />
    </div>
  );
};
export default Container;
