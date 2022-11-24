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
  const [data, setData] = useState([]);

  useEffect(() => {
    // document.ready 기본 폼
    getList();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

    setData(res.data.data.movies)
  }


  // const [detail, setDetail] = useState();

  // useEffect(() => {
  //   getDetail();
  // }, []);

  // useEffect(() => {
  //   console.log(detail);
  // }, [detail]);

  // const getDetail = async () => {
  //   const res = await axios.get('/api/v2/movie_details.json', {
  //     params: {
  //       movie_id : '',
  //     }
  //   });

  //   setDetail(res.data.data.movies)
  // }

  //   const onClick = (e) => {
  //     const { target } = e;

  //     const parent = target.tagName.toLowerCase() === 'li' ? target : target.closest('li');

  //     console.log(parent.dataset.id);
  //   }

  const  [modalOpen, setModalOpen] = useState();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  // const onClick = (e) => {
  //   const { target } = e;

  //   const parent = target.tagName.toLowerCase() === 'li' ? target : target.closest('li');

  //   console.log(parent.dataset.id);
  // }

  return (
    <div className="wrap">
      <Header />
      <Main data={data} onClick={openModal} />
      <Search />

      <Modal open={modalOpen} close={closeModal} />

      {/* <div id="modal" className="{!detail ? '' : 'show"></div> */}
    </div>
  )
}

export default App;
