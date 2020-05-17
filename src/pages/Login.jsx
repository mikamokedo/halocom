import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import {login_success} from '../redux/action/user';
import {useSelector,useDispatch} from 'react-redux';
const Login = (props) => {
  const dispatch = useDispatch();
  const listUser = useSelector(state => state.listUser.list);
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [handleError, sethandleError] = useState("");
  const checksuccess = (user) =>{
    let result = false;
    listUser.forEach(element => {
     if(element.password === user.password && element.user === user.user){
       result = true;
     }
    });
    return result;
 }
  const onSubmit = data => {
    setLoading(true);
      setTimeout(() => {
          if(checksuccess(data)){
            sethandleError("login success");
            dispatch(login_success(data.user));
            props.history.push("/"); 
          }
          else{
            sethandleError("wrong password");
          }
        setLoading(false);
      }, 1000);
  }
  return (
    <div className="singup mt-5">
      <div className="justify-content-center row">
        <div className="col-lg-6">
            
            <div className="card-css card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                  <label className="text-left d-block" htmlFor="user">User Name</label>
                  <input placeholder="Enter your user name" name="user" id="user" type="text" className="form-control" ref={register({ required: 'Field is required',minLength:6 })}/>
                  <span className="text-danger">{errors.user && errors.user.message}</span>
                  <span className="text-danger">{errors.user && errors.user.type === "minLength" && "Your input at leat 6 character"}</span>
                  </div>
                  <div className="form-group">
                  <label className="text-left d-block" htmlFor="password">Pass Word</label>
                  <input placeholder="Enter your password" name="password" id="password" type="password" className="form-control" ref={register({ required: 'Field is required',minLength:6 })}/>
                  <span className="text-danger">{errors.password && errors.password.message}</span>
                  <span className="text-danger">{errors.password && errors.password.type === "minLength" && "Your input at leat 6 character"}</span>
                  </div>
  <span className="text-danger text-center d-block mb-1">{handleError}</span>
                  <div className="wrap-button">
                  <input type="submit" value="submit" className="btn btn-block btn-cus"/>
                  {loading ? <CircularProgress disableShrink /> : null}
                  </div>
                  <span className="d-block mt-1 text-center">Don't have a account? click <Link className="text-danger" to="/signup">Here</Link></span>
              </form>
            </div>
        </div>

      </div>
    </div>
        
  );
}
export default Login;