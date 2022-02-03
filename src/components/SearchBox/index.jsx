import React, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import './styles.scss'

function SearchBox({
  searchKeywords, setSearchKeywords
}){
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchKeywords(e.target.value);
    if(!loading){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 300)
    }
  }
  return (
    <div className="search-box-banner">
      <input
        className="search-input"
        placeholder="Type any keyword"
        value={searchKeywords}
        onChange={handleChange}
      />
      <div className="search-loader">
        <PulseLoader loading={loading} color="#989898" size={5} />
      </div>
    </div>
  )
}

export default SearchBox
