import styleSearch from "./Search.module.css";

function Search({onClose}) {
  return <div className={styleSearch.container} onClick={onClose}>
    <button>X</button>
  </div>;
}

export default Search;
