import Article from "./components/Article/Article";
import Section from "./components/Article/Section";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// App.jsx
function Home() {
  return (
    <>
      <Navbar/>
      <Article/>
      <Section/>
      <Footer/>
    </>
  );
}

export default Home;