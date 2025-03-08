import { createContext, useState } from "react";

export const Context = createContext();

const ContextPostListProvider = ({ children }) => {
  const [activeBtn, SetActiveBtn] = useState("Home");
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

  const [query, setQuery] = useState("");

  const seachOutput = (e) => {
    setQuery(e.target.value);
  };

  const filterPostList =
    postList.filter((posts) =>
      posts.title.toLowerCase().includes(query.toLowerCase())
    ) ||
    postList.filter((post) =>
      post.content.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

  return (
    <>
      <Context.Provider
        value={{
          activeBtn,
          SetActiveBtn,
          createPost,
          postList,
          filterPostList,
          seachOutput,
          query,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
export default ContextPostListProvider;
