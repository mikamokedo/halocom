import React,{useState,useEffect} from 'react';
import Select from '../components/Select';
import Post from '../components/Post';
import Comment from '../components/Comment';
import Pagination from "react-js-pagination";
import {useSelector} from 'react-redux';
const Home = () => {
  const category = useSelector(state => state.select.category);
  const database = useSelector(state => state.select.database);
  const fillterVal = useSelector(state => state.select.fillterVal);
  const by = useSelector(state => state.select.by);
  const [activePage,setActivePage] = useState(1);
  const [databaseTemp,setdatabaseTemp] = useState([]);
  useEffect(() => {
    if(by=== "date"){
      database.sort((a,b) =>{
          if(a.time > b.time){
            return -1;
          } 
          if(a.time < b.time){
            return 1;
          } 
        })
  }
  else if(by=== "stories"){
    database.sort((a,b) =>{
          if(a.points > b.points){
            return -1;
          } 
          if(a.points < b.points){
            return 1;
          } 
        })      
  }

  if(database.length > 10){
    let temp = [];
    for(let index = 0; index < database.length; index++) {
      if(index >= ((activePage - 1) * 10) && index < ((activePage - 1) * 10) + 10){
        const element = database[index];
        temp.push(element);
      }     
    }
    setdatabaseTemp(temp);
  }
  else{
    let temp = [...database];
    setdatabaseTemp(temp);
  }
  }, [by]);

  useEffect(() => {
    setActivePage(1);
    if(database.length > 10){
      let temp = [];
      for(let index = 0; index < database.length; index++) {
        if(index < 10){
          let element = database[index];
          temp.push(element);
        }     
      }
      setdatabaseTemp(temp);
    }
    else{
      let temp = [...database];
      setdatabaseTemp(temp);
    }
  }, [category]);
  useEffect(() => {
    let temp = [];
    setActivePage(1);
    if(database.length > 10){
      let temp = [];
      for(let index = 0; index < database.length; index++) {
        if(index >= ((activePage - 1) * 10) && index < ((activePage - 1) * 10) + 10){
          const element = database[index];
          temp.push(element);
        }     
      }
      setdatabaseTemp(temp);
    }
    else{
      let temp = [...database];
      setdatabaseTemp(temp);
    }
  }, [fillterVal]);



  useEffect(() => {
    let temp = [];
    for(let index = 0; index < database.length; index++) {
      if(index < 10){
        const element = database[index];
        temp.push(element);
      }
    }
    setdatabaseTemp(temp);
  }, [])

  const handlePageChange = (pageNumber) =>{
    setActivePage(pageNumber);
    if(database.length > 10){
      let temp = [];
      for(let index = 0; index < database.length; index++) {
        if(index >= ((pageNumber - 1) * 10) && index < ((pageNumber - 1) * 10) + 10){
          const element = database[index];
          temp.push(element);
        }     
      }
      setdatabaseTemp(temp);
    }
  }
  const printStories = () =>{
    let result = null;
    result =  databaseTemp.map((ele,key) =>{
      return  <Post title={ele.title} author={ele.author} points={ele.points} comment={ele.comment} key={key} time={ele.time} uuid={ele.uuid}/>
    })
    return result;
  };

  const printComment = () =>{
    let result = [];
    result =  databaseTemp.map((ele,key) =>{
      return  <Comment author={ele.author} key={key} time={ele.time} content={ele.content}/>
    })
    return result;
  };
    return (
        <div className="home">
          <Select /> 
          <div className="wrap_detail">
          {category === "stories" ? printStories() : printComment()}
          </div>
          {database.length > 10 ? <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={database.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        /> : null}
        </div>
    );
};

export default Home;


