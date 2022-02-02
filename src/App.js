import { useQuery } from "@apollo/client";

import { CONTENT_CARDS_QUERY } from "./apollo/queries"

import SearchBox from "components/SearchBox";
import ContentCard from "components/ContentCard"

import './app.scss'

function App() {
  const { data , loading, error } = useQuery(CONTENT_CARDS_QUERY, { variables: {offset: 1}});

  console.log('data', data?.contentCards?.edges)

  return (
    <div className="main-app">
      <p className="title">Search</p>
      <SearchBox />
      <div className="content-cards-banner">
        {data?.contentCards?.edges?.map((edge, index) => <ContentCard {...{ key: index, ...edge }} />)}
      </div>
    </div>
  );
}

export default App;
