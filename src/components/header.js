import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
   <div className="container">
     <div className="inner-header">
     <div className="logo">
      <Link to="/">JAYNE HER</Link>
     </div>
     <div className="navigation">
       <nav>
         <Link to="/producerpg">Producer</Link>
         <Link to="/work">PR</Link>
         <Link to="/press">Press</Link>
         <Link to="/contact">Bio + Contact</Link>
         <a href="https://www.outcaststudio.co/" target="_blank" id="outcastlink">Outcast</a>
       </nav>
     </div>
     </div>
   </div>
  </header>
)



export default Header

