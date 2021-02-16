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
         <Link to="/about">About</Link>
         <Link to="/producerpg">Producer</Link>
         <Link to="/work">PR</Link>
         <Link to="/press">Press</Link>
         <Link to="/contact">Contact</Link>
       </nav>
     </div>
     </div>
   </div>
  </header>
)



export default Header

