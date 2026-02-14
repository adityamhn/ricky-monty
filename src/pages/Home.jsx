import React, { useEffect, useState } from 'react';
import '../styles/Home.scss'
import { GoSearch } from "react-icons/go"
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';
import { getCharacters } from '../data/mockCharacters';

//images
import logo from '../assets/images/logo.png'
import loader from '../assets/images/loader.gif'
import end from '../assets/images/end.gif'
import errorGif from '../assets/images/error.gif'
import { useLocation } from 'react-router';



const FILTER_OPTIONS = {
  status: [
    { value: "", label: "All statuses" },
    { value: "Alive", label: "Alive" },
    { value: "Dead", label: "Dead" },
    { value: "unknown", label: "Unknown" },
  ],
  species: [
    { value: "", label: "All species" },
    { value: "Human", label: "Human" },
    { value: "Alien", label: "Alien" },
    { value: "Humanoid", label: "Humanoid" },
    { value: "Robot", label: "Robot" },
    { value: "Animal", label: "Animal" },
    { value: "Mythological Creature", label: "Mythological Creature" },
    { value: "Cronenberg", label: "Cronenberg" },
    { value: "Disease", label: "Disease" },
    { value: "unknown", label: "Unknown" },
  ],
  gender: [
    { value: "", label: "All genders" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Genderless", label: "Genderless" },
    { value: "unknown", label: "Unknown" },
  ],
};

const Home = () => {
  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1)
  const [searchterm, setSearchterm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [speciesFilter, setSpeciesFilter] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const { pathname } = useLocation();
  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const timer = setTimeout(() => {
      try {
        const { characters } = getCharacters({
          page,
          name: searchterm || "",
          status: statusFilter || "",
          species: speciesFilter || "",
          gender: genderFilter || "",
        })
        setChars((prev) => (page === 1 ? characters.results : prev.concat(characters.results)))
        setCompleted(!characters.info.next)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [page, searchterm, statusFilter, speciesFilter, genderFilter])

  const fetchMoreChars = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    setPage(1)
  }, [pathname])

  const resetFilters = () => {
    setPage(1)
    setChars([])
    setCompleted(false)
  }

  const handleSearchChange = (value) => {
    setSearchterm(value)
    resetFilters()
  }

  const handleFilterChange = (setter, value) => {
    setter(value)
    resetFilters()
  }

  if (chars.length === 0 && loading) {
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
            <input className="searchfield" placeholder="Search for Ricky Monty characters" value={searchterm} onChange={(e) => handleSearchChange(e.target.value || "")} />
          </div>
          <div className="filterContainer">
            <select
              className="filterSelect"
              value={statusFilter}
              onChange={(e) => handleFilterChange(setStatusFilter, e.target.value)}
              aria-label="Filter by status"
            >
              {FILTER_OPTIONS.status.map((opt) => (
                <option key={opt.value || "all"} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <select
              className="filterSelect"
              value={speciesFilter}
              onChange={(e) => handleFilterChange(setSpeciesFilter, e.target.value)}
              aria-label="Filter by species"
            >
              {FILTER_OPTIONS.species.map((opt) => (
                <option key={opt.value || "all"} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <select
              className="filterSelect"
              value={genderFilter}
              onChange={(e) => handleFilterChange(setGenderFilter, e.target.value)}
              aria-label="Filter by gender"
            >
              {FILTER_OPTIONS.gender.map((opt) => (
                <option key={opt.value || "all"} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <a
            href="https://www.adultswim.com/videos/rick-and-morty"
            target="_blank"
            rel="noopener noreferrer"
            className="officialSiteBtn"
          >
            Official Rick & Morty
          </a>
        </div>
        {error ? <div className="loaderContainer">
          <img src={errorGif} className="gif" alt="error" />
          <div className="text">Error Occured!! Please Try later</div>
        </div> :
          <InfiniteScroll
            dataLength={chars.length}
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
                  {chars?.map((character) => (
                    <Card key={character.id} character={character} />
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
