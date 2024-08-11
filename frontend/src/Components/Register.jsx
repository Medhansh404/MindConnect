import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "../Api/axios";

const REGISTER_URL = '/register';

const Register = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  const [errMssg, setErrMssg] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    setErrMssg('');
  }, [name, email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ name, email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      if(response.status === 200) {
        console.log("Registered Successfully");
      }
      setName('');
      setEmail('');
      setPwd('');
      from === '/' ? navigate("/login") : navigate(from, { replace: true });
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
        setErrMssg('Register Failed, Try again');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Welcome to MindConnect</h2>
        {errMssg && <p ref={errRef} className="text-red-500 text-center">{errMssg}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={userRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Don't remember your password?</a>
            </div>
            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Don't have an account?</a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
