import React, { useEffect, useState } from 'react';
import '../styles/Home.scss'
import { GoSearch } from "react-icons/go"
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';
import { useQuery, gql } from '@apollo/client';

//images
import logo from '../assets/images/logo.png'
import loader from '../assets/images/loader.gif'
import end from '../assets/images/end.gif'
import errorGif from '../assets/images/error.gif'
import { useLocation } from 'react-router';



//Query to get all Characters
const getAllCharacters = gql`
query Characters($page: Int, $name: String) {
  characters(page:$page,filter : {name: $name}) {
    info {
      next
      count
    }
    results  {
      id
      name
      status
      species
      type
      gender
      origin {
        id 
        name
        type
        dimension
      }
      image
    }
  }
}
`;



const Home = () => {
  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1)
  const [searchterm, setSearchterm] = useState("")
  const { pathname } = useLocation();
  const [completed, setCompleted] = useState(false)




  const { loading, error, data, refetch } = useQuery(getAllCharacters, {
    variables: {
      page: page,
      name: searchterm || ""
    },
    onCompleted: (data) => {
      setChars(chars.concat(data.characters.results))
      if (!data.characters.info.next) {
        setCompleted(true)
      }
    }
  });

  const fetchMoreChars = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    setPage(0)
  }, [pathname])

  useEffect(() => {
    setPage(1)
    setChars([])
    if (!searchterm) {
      refetch({
        name: ""
      })
    }
  }, [searchterm])

  if (chars.length === 0 && !searchterm && loading) {
    return (
      <div className="loaderContainer">
        <img src={loader} className="gif" alt="loader" />
        <div className="text">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="homeContainer">
        <div className="header">
          <img src={logo} className="logo" alt="rickyMonty-logo" />
          <div className="inputContainer">
            <div className="iconContainer">
              <GoSearch className="icon" />
            </div>
            <input className="searchfield" placeholder="Search for Ricky Monty characters" value={searchterm} onChange={(e) => setSearchterm(e.target.value || "")} />
          </div>
        </div>
        {error ? <div className="loaderContainer">
          <img src={errorGif} className="gif" alt="error" />
          <div className="text">Error Occured!! Please Try later</div>
        </div> :
          <InfiniteScroll
            dataLength={data?.characters?.info.count}
            next={fetchMoreChars}
            hasMore={!completed ? true : false}
            loader={<div className="loaderContainer">
              <img src={loader} className="gif" alt="loader" />
              <div className="text">Loading...</div>
            </div>}
            endMessage={
              <div className="loaderContainer">
                <img src={end} className="gif" alt="end" />
                <div className="text">Yay! You have seen it all</div>
              </div>
            }
            scrollThreshold={0.9}
          >
            <div className="cardsContainer">
              {chars.length > 0 && (
                <>
                  {chars?.map((character, index) => (
                    <Card key={index} character={character} />
                  ))}
                </>
              )}
            </div>
          </InfiniteScroll>}

      </div>
    </>
  );
};

export default Home;
