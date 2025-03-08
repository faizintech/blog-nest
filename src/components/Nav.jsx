const Nav = ({ IntialActiveBtn, SetActiveBtn }) => {
  return (
    <nav>
      <ul>
        <li
          className={IntialActiveBtn === "Home" && "active"}
          onClick={() => SetActiveBtn("Home")}
        >
          Home
        </li>
        <li
          className={IntialActiveBtn === "Create Post" && "active"}
          onClick={() => SetActiveBtn("Create Post")}
        >
          Create Post
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
