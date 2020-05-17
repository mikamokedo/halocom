import React from 'react';
import logo from '../asset/logo.png';
import {change_fillter} from '../redux/action/select';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = () => {
    const authi = useSelector(state => state.listUser.authi);
    const user = useSelector(state => state.listUser.userName);
    const dispatch = useDispatch();
    const fillter = (e) =>{
        let value = e.target.value;
        dispatch(change_fillter(value));
    }
    return (
        <header className="d-flex">
           <div className="logo"><Link to="/"><img src={logo} alt="logo halo"/></Link></div>
           <div className="search_bar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search by title" onChange={fillter}/>
        </div>
    {authi ? (<p><a href="/">{user}</a></p>) : (<div className="link_login">  
                <p className="linksigup"><Link to="/signup">Signup</Link></p> 
                <p className="linklogin"><Link to="/login">Login</Link></p> 
        </div>)}
        </header>
    );
};

export default Header;