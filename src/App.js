import React, { useEffect, useState } from "react";

import axios from 'axios';

import Header from "./page/components/Header";
import Main from "./page/components/Main";
import Search from "./page/components/Search";
import Modal from "./page/components/Modal";

import "./assets/css/reset.css";
import "./assets/css/header.css";
import "./assets/css/main.css";
import "./assets/css/search.css";
import "./assets/css/modal.css";

const App = () => {

  // movie data 불러오기
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await axios.get('/api/v2/list_movies.json', {
      params: {
        limit : 5,
        sort_by : 'year',
        order_by : 'desc',
        with_rt_ratings: false,
        query_term : 'Spider-Man',
      }
    });

    setData(res.data.data.movies);
  }

  const [detail, setDetail] = useState();

  useEffect(() => {
  }, [data]);

  const getId = async e => {

    const movieId = e.target.closest('li').dataset.id;
    const res = await axios.get('/api/v2/movie_details.json', {
      params: {
        movie_id: movieId,
      }
    });

    setDetail(res.data.data.movie);
  }

  // 모달 show/hide
  const  [modalOpen, setModalOpen] = useState();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="wrap">
      <Header />
      <Main data={data} open={openModal} click={getId} />
      <Search />

      <Modal detail={detail} open={modalOpen} close={closeModal} />
    </div>
  )

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // const onClick = (e) => {
  //   const { target } = e;

  //   const parent = target.tagName.toLowerCase() === 'li' ? target : target.closest('li');

  //   console.log(parent.dataset.id);
  // }
}

export default App;
