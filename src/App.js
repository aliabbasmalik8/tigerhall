import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client";
import debounce from 'lodash.debounce';
import InfiniteScroll from 'react-infinite-scroll-component';
import PulseLoader from "react-spinners/PulseLoader";

import { CONTENT_CARDS_QUERY } from "./apollo/queries"

import SearchBox from "components/SearchBox";
import ContentCard from "components/ContentCard"
import Loader from "components/PageLoader";

import './app.scss'

function App() {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [filteredData, setFiltereddata] = useState([]);
  const { data , loading, error, fetchMore } = useQuery(CONTENT_CARDS_QUERY, { variables: {offset: 0}});

  useEffect(() => {
    handleSearch();
  }, [data])

  useEffect(() => {
    debounceOnSearch()
  }, [searchKeywords])

  const handleSearch = () => {
    const filteredEdges = data?.contentCards?.edges?.filter((edge => edge?.name?.toLowerCase()?.includes(searchKeywords?.toLowerCase())));
    setFiltereddata(filteredEdges)
  }

  const debounceOnSearch = debounce(handleSearch, 300);

  return (
    <>
      {loading && <Loader />}
      <div className="main-app">
        <p className="title">Search</p>
        <SearchBox {...{searchKeywords, setSearchKeywords}} />
        {filteredData?.length > 0 && (
          <InfiniteScroll
            dataLength={data?.contentCards?.edges?.length + 20}
            next={() => fetchMore({variables: {offset: data?.contentCards?.edges?.length}})}
            hasMore={true}
            loader={<PulseLoader loading={true} color="#003238" size={20} />}
          >
            {filteredData?.map((edge, index) => <ContentCard {...{ key: index, ...edge }} />)}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

export default App;
