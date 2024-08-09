import { useState, useRef, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from "../Api/axios";

const LOGIN_URL = '/auth';

const Login = () => {

  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation( );
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [errMssg, setErrMssg] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  

  // useEffect(() =>{
  //   userRef.current.focus();
  // }, []);
  
  useEffect(() =>{
    setErrMssg('');
  }, [email, pwd]);


const handleSubmit = async (e) =>{
  e.preventDefault();
  
  // request here
  try {
    const response = await axios.post(LOGIN_URL, 
      JSON.stringify({email, pwd}),
      {
        headers:{ 'Content-Type': 'application/json'},
        withCredentials: true //for the cookie and access token
      }
    ); 
    //recieved the token
    const accessToken = response.data?.accessToken;
    const roles = response.data?.roles;
    const id = response.data?.emp_id;
    setAuth({id, email, pwd, roles, accessToken});
    setEmail('');
    setPwd('');
    from === '/' ? navigate("/dashboard") : navigate(from, { replace: true });
    //navigate("dashboard", {replace: true});
  }
  catch(error){
    if (!error?.response){
      setErrMssg('No Server Response');
    }
    else if (error.response?.status === 400){
      setErrMssg('Missing Username or Password');
    }
    else if (error.response?.status === 401){
      setErrMssg('Unauthorised, Contact admininstration or try again');
    }
    else{
      setErrMssg('Login Failed, Try again');
    }
    //errRef.current.focus();
  }
  
  
};



return (
    <div className= "loginForm">
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input onChange={(e) => setEmail(e.target.value)} ref= {userRef} value = {email} name = "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input onChange={(e) => setPwd(e.target.value)}  value = {pwd} name = "password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  );
  };
export default Login;