import Header from "./Header";
import { useState } from "react";
const Navbar = ({ greet }) => {
  const name = "Daniel";
  const greeting = "Afternoon";
  const myArray = ['Home', 'About', 'Blog', 'Contact'];
  const [Comments, setComments] = useState(0);

  const clickHandler= ()=>{
    setComments(Comments+1)
  }

  return (
    <div>
      <Header />
      <button onClick={clickHandler}>comments {Comments}</button>
      <br /><br /><br /><br />
      <h1>Hello {greet}</h1>
      <h2>Good {greeting} {name} and welcome to React </h2>
      <ul>
        {myArray.map((navLinks) => (
          <li key={navLinks}><a href="">{navLinks}</a></li>
        ))}
      </ul>

    </div>
  )
}

export default Navbar;