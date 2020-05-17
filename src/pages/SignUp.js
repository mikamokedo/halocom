import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {sigup_success} from '../redux/action/user';

const Signup = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [ loading, setLoading] = useState(false);
  const [handleError, sethandleError] = useState("");
  const listUser = useSelector(state => state.listUser.list);
  const checkdup = (user) =>{
     let result = true;
     listUser.forEach(element => {
      if(element.email === user.email || element.user === user.user){
        result = false;
      }
     });
     return result;
  }
  const onSubmit = data => { 
    setLoading(true);
    setTimeout(() => {
      if(data.password !== data.repassword){
        sethandleError("Password and repassword must be same!");
        setLoading(false);
      }
      else{
          if(checkdup(data)){
            data.id = listUser.length;
            dispatch(sigup_success(data));
          props.history.push("/"); 
          }
          else{

            sethandleError("User hasbeen Register");
          }

         setLoading(false);
      }

    }, 1000);
  
  }
  return (
    <div className="singup mt-5">
      <div className="justify-content-center row">
        <div className="col-lg-6">
            
            <div className="card-css card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                  <label className="text-left d-block" htmlFor="email">Email</label>
                  <input placeholder="Enter your Email name" name="email" id="email" type="text" className="form-control" ref={register({
                    required: 'Field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                    })}/>
        <span className="text-danger">{errors.email && errors.email.message}</span>
                  </div>
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
                  <div className="form-group">
                  <label className="text-left d-block" htmlFor="repassword">RePassword</label>
                  <input placeholder="Enter your repassword name" name="repassword" id="repassword" type="password" className="form-control" ref={register({ required: 'Field is required',minLength:6 })}/>
                  <span className="text-danger">{errors.repassword && errors.repassword.message}</span>
                  <span className="text-danger">{errors.repassword && errors.repassword.type === "minLength" && "Your input at leat 6 character"}</span>
                  </div>
                  <span className="text-danger text-center d-block mb-1">{handleError}</span>
                  <div className="wrap-button">
                  <input type="submit" value="submit" className="btn btn-block btn-cus"/>
                  {loading ? <CircularProgress disableShrink /> : null}
                  </div>
                  <span className="d-block mt-1 text-center">you already have a account? click <Link className="text-danger" to="/login">Here</Link></span>
              </form>
            </div>
        </div>

      </div>
    </div>
        
  );
}

export default Signup;