import React from "react";

const Search = () => {
    return (
        <div className="searchWrap">
            <label htmlFor="movieSearch"></label>
            <input type="search" id="movieSearch" title="검색어 입력" placeholder="영화, 인물 검색" />
        </div>
    )
}

export default Search;