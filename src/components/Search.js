import React, { useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onTermSubmit(term);
  };

  return (
    <div className="search-container">
      <form onSubmit={onFormSubmit}>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={term}
          onChange={onInputChange}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg> */}
      </form>
    </div>
  );
};

export default Search;
