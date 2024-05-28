import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";


export default function App() {
  return (
    <>
      <div className="navbar_bg">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <Section />
        <Main />
      </div>
      <div className="container">
        <Footer/>
      </div>
    </>

  )
}