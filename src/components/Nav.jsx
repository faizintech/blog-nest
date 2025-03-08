import { useContext } from "react";
import { Context } from "../store/context";
const Nav = () => {
  const { activeBtn, SetActiveBtn } = useContext(Context);
  return (
    <nav>
      <ul>
        <li
          className={activeBtn === "Home" ? "active" : undefined}
          onClick={() => SetActiveBtn("Home")}
        >
          Home
        </li>
        <li
          className={activeBtn === "Create Post" ? "active" : undefined}
          onClick={() => SetActiveBtn("Create Post")}
        >
          Create Post
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
