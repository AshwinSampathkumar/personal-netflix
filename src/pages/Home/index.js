/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetTrendingListQuery } from "../../redux/services/movies";
import Navbar from "../../layouts/navbar";
import Cover from "../../components/cover";
import NetflixOriginal from "./components/netflixOriginal";
import TopRated from "./components/topRated";
import PopularList from "./components/popular";
import TvShowsList from "./components/tvShows";
import MoviesList from "./components/moviesByGenre";
import { HOME } from "../../constants";
import "../../styles/page/home.scss";

function Home() {
  const { selectedProfile } = useSelector((state) => state.profileSlice);

  const { data: trending } = useGetTrendingListQuery();

  const [coverMovie, setCoverMovie] = useState(null);

  useEffect(() => {
    if (trending?.results?.length) {
      let index = Math.floor(Math.random() * trending.results.length);
      setCoverMovie(trending.results[index]);
    }
  }, [trending]);

  return (
    <div className="container-main-page">
      <Navbar selectedProfile={selectedProfile} />

      <Cover movie={coverMovie} />

      <div style={{ paddingTop: 16 }}>
        <NetflixOriginal trending={trending} />
        <TopRated />
        <PopularList />
        <TvShowsList />
        {HOME.moviesByGenre.map((item) => {
          return <MoviesList key={item.id} title={item.title} genreId={item.genreId} />;
        })}
      </div>
    </div>
  );
}

export default Home;
