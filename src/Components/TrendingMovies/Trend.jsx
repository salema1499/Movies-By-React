import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trend.css";
export const Trend = () => {
  const [movies, setmovies] = useState([]);
  const apiImg = "https://image.tmdb.org/t/p/w500";
  const fetchdata = async () => {
    //   const res=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=625eb01ddbeff866a9b6b0ee368f9a33').then((res)=>res.results).then((data)=>setmovies(data))
    //        setmovies(res.results)

    axios(
      "https://api.themoviedb.org/3/discover/movie?api_key=625eb01ddbeff866a9b6b0ee368f9a33"
    ).then((res) => {
      console.log("RES : ", res.data.results);
      setmovies(res.data.results);
      // console.log("res",res)
      // setmovies(res.results)
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const movee = movies.map((mov, index) => {
    return (
      <div key={index} className="sild">
        <div className="divimg">
          <img
            src={`${apiImg}/${mov.poster_path}`}
            className="imgmov"
            alt="imgnoo"
          />
        </div>
        <h4 className="titlepost">{mov.title}</h4>
        <p>{mov.release_date}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <h3 className="titletrending">Trending</h3>
      <div className="row showslid">
        <div className="col-lg-2 col-md-2 onemovi">{movee}</div>
      </div>
    </div>
  );
};
