import '../CSS/css/navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../IMG/llama2.png';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/'>
            <img className='navbar-brand logo' src={Logo}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link active" to='/'>
                  Home
                  <span class="visually-hidden">(current)</span>
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to='/api'>
                  ApiRick
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to='/pokeapi'>
                  PokeApi
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              ></input>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
