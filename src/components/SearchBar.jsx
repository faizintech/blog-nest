import { useContext } from "react";
import { Context } from "../store/context";

const SearchBar = () => {
  const { seachOutput, query } = useContext(Context);
  return (
    <div className="searchBar">
      <input type="text" placeholder="search here by title and content" value={query} onChange={(e) => seachOutput(e)} />
    </div>
  );
};
export default SearchBar;
