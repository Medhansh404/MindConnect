import {Outlet, Link} from 'react-router-dom';

const Home = () =>{
    return (
        <div>
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
      </div>    
    )
}

export default Layout;