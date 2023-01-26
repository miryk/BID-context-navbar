import { NameContext } from "../context/NameContext";

const Navbar = () => {
  
  return (
    <NameContext.Consumer>
      {value => <div className="nav"><h1>Hello {value.name}!</h1></div>}
    </NameContext.Consumer>
  )
}

export default Navbar;