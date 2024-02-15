import { useState } from 'react';
import Navbar from "./components/Navbar.jsx";
import "./styles.css";
import MainContainer from './components/MainContainer.jsx';

function App() {
  const [selectedPage,setSelectedPage] = useState(0);

  const ContainerArray = [MainContainer];

  const onSelectPage = (newPage) => {
    setSelectedPage(newPage);
  }

  return (
    <>
      <Navbar onSelectPage={onSelectPage}></Navbar>
      <MainContainer page={selectedPage}></MainContainer>
    </>
  )
}

export default App
