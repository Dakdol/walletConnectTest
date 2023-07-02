import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // 검색 로직을 구현하여 searchResults를 업데이트합니다.
    // 예를 들어, 검색 대상 데이터가 배열인 경우
    const filteredResults = searchData.filter(
      (
        item //searchData로 prop 전달
      ) => item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const searchData = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    // 추가 검색 대상 데이터
  ];

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        className="w-[314px] h-[24px] mt-[3px] ml-[6px] text-[16px] font-bold text-black  border-b-[0.5px] border-black"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
