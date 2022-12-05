import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
function App() {
  // var currentPage = "about"
  const [currentPage, setCurrentPage] = useState("about")
  function renderPage(){
    if(currentPage =="about"){
      return<AboutMe></AboutMe>
    }
    if(currentPage == "portfolio"){
      return<Portfolio></Portfolio>
}
if(currentPage == "contact"){
  return<ContactForm></ContactForm>
}
if(currentPage == "resume"){
  return<Resume></Resume>
}
  }
  return (
    <div>
      <Navbar setCurrentPage = {setCurrentPage} currentPage = {currentPage}></Navbar>
{renderPage()}

<Footer></Footer>
    </div>
  );
}

export default App;

{/* <Page currentPage = {currentPage}></Page> */}