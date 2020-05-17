import React from 'react';
import {useDispatch} from 'react-redux';
import {change_category,change_by} from '../redux/action/select';

const Select = () => {
  const dispatch = useDispatch()
  const changeCate = (e) =>{
    let value = e.target.value;
    dispatch(change_category(value));
  };
  const changeBy = (e) =>{
    let value = e.target.value;
    dispatch(change_by(value));
  };
    return (
        <div className="select_div">
            <span>Search</span>
            <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1" onChange={changeCate}>
            <option value="stories">Stories</option>
            <option value="comment">Comment</option>
          </select>
        </div>
        <span>By</span>
        <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1" onChange={changeBy}>
            <option value="popular">Popular</option>
            <option value="date">Date</option>
          </select>
        </div>

        </div>
    );
};

export default Select;