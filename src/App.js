import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import React, { useState } from "react";
import { NameContext } from './context/NameContext';


function App() {
  const [name, setName] = useState("Will Smith");

  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar/>
          <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
