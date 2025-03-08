import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [IntialActiveBtn, SetActiveBtn] = useState("Home");
  const [postList, setPostList] = useState([]);

  const createPost = (e, Title, Content) => {
    e.preventDefault();
    if (Title.current.value !== " " && Content.current.value !== " ") {
      const newPost = {
        title: Title.current.value,
        content: Content.current.value,
      };
      const newpostList = [...postList, newPost];
      setPostList(newpostList);
      Title.current.value = "";
      Content.current.value = "";
    }
  };

  return (
    <>
      <Header />
      <Nav IntialActiveBtn={IntialActiveBtn} SetActiveBtn={SetActiveBtn} />
      <Container
        postList={postList}
        createPost={createPost}
        IntialActiveBtn={IntialActiveBtn}
      />
      <Footer />
    </>
  );
};
export default App;
