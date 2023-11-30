import { useState } from "react";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Navbar from "./layout/Navbar";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Navbar />
      <Menu toggleDropdown={toggleDropdown} />
      <Dropdown isOpen={isOpen} />
      <Header />
    </div>
  );
}

export default App;
