// import {Outlet, Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";

const Home = () =>{
    return (
     
      <div> 
      <div>
        <Navbar />
      </div>
       
       {/* <div className="bg" style={background-color}></div> */}
        {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
              
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>     */}
      </div>
    )
}

export default Home;