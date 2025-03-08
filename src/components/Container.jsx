import CreatePost from "./CreatePost";
import PostList from "./PostList";
import SideBar from "./SideBar";
const Container = ({ IntialActiveBtn ,createPost,postList}) => {
  return (
    <div className="container">
      <div className="main-content">
        {IntialActiveBtn === "Home" ? <PostList postList={postList}/> : <CreatePost createPost={createPost}/>}
      </div>
      <SideBar />
    </div>
  );
};
export default Container;
