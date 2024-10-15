import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from "../Api/axios";
import logo from "../assests/home_logo.png";

const LOGIN_URL = '/auth';

const Login = () => {

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [errMssg, setErrMssg] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    setErrMssg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      const accessToken = response.data?.accessToken;
      const roles = response.data?.roles;
      const id = response.data?.user_id;
      const userName = response.data?.userName;

      setAuth({ userName, id, email, pwd, roles, accessToken });
      setEmail('');
      setPwd('');
      from === '/' ? navigate("/") : navigate(from, { replace: true });
    }
    catch (error) {
      if (!error?.response) {
        setErrMssg('No Server Response');
      }
      else if (error.response?.status === 400) {
        setErrMssg('Missing Username or Password');
      }
      else if (error.response?.status === 401) {
        setErrMssg('Unauthorized, Contact administration or try again');
      }
      else {
        setErrMssg('Login Failed, Try again');
      }
    }
  };

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className='relative flex right-9 '>
        <a aria-label="Go to homepage" href="/">
          <img src={logo} alt="resume" 
          className="h-11 w-24 object-contain" 
          style={{ color: 'transparent' }} 
             loading="lazy"
          />
        </a>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Welcome to MindConnect</h2>
        </div>
        {errMssg && <p ref={errRef} className="text-red-500 text-center">{errMssg}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label> */}
            <input
              type="email"
              name="email"
              id="email"
              ref={userRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> */}
            <input
              type="password"
              name="password"
              id="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-3 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Password"
            />
          </div>
        
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              LOGIN
            </button>
            <div className="text-center pt-2">
            <div className="text-sm">
              <span className='font-medium'>Don't have an account? </span><a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">Sign Up</a>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
