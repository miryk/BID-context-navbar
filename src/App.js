import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import React, { useContext, useState } from "react";
import { NameContext } from './context/NameContext';


function App() {
  const [name, setName] = useState("");
  const nameContext = useContext(NameContext);

  return (
    <div className="App">
      <NameContext.Provider value={nameContext}>
        <Wrapper>
          <Navbar name={"Will"}/>
          <FormWrapper />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
