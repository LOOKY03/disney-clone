import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function NewDisney() {
  const [disneyMovies, setDisneyMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const API_KEY = "dae4955ad22831998335bbe9609e717b";
    const url = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=disney&page=1`;
    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=bao&language=en-US&page=1&include_adult=false`;
    axios.get(url2).then((res) => {
      console.log(res.data.results);
      setDisneyMovies(res.data.results);
    });
  };

  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {disneyMovies.map((item) => (
          <Wrap>
            <img src={`${baseUrl}${item.poster_path}`} alt="" />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default NewDisney;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  overflow-x: scroll;

`;

const Wrap = styled.div`
  margin-right:10px;
  width:100%;
  height:100%;
 
  
  

  img {
    width: 200px;
    border-radius:5px;
    height:100%;
   
  }

`;
