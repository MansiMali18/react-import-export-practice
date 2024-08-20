
import "./Navbar.css";
function Navbar() {
  return (
    <>
    <div className='navbar'>
     <div className='name'>
       
      </div>
      <div className='links'>
          <a href="/"className='nav-links'>
          Home
          </a>
          <a href="/About"className='nav-links'>
          About
          </a>
          <a href="/Contact"className='nav-links'>
          Contact
          </a>
          <a href="/Services"className='nav-links'>
          Services
          </a>
      </div>
    </div>
    </>
  )
}

export default Navbar;