import  { useState, useEffect } from "react";
import "./styles/App.scss";
import "./styles/normalyze.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Slyder } from "./components/Slyder/Slyder";
import { Newsletter } from "./components/news/newsletter.tsx";
import arrow from "./assets/img/arrow.png";



function App() {

   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
     const checkScroll = () => {
       const scrollPosition = window.pageYOffset;

       // Показывать кнопку, когда пользователь прокрутил страницу хотя бы на 100px
       if (scrollPosition > 100) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     };

     window.addEventListener("scroll", checkScroll);
     return () => window.removeEventListener("scroll", checkScroll);
   }, []);

   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };


  return (
    <div className="body-main">
      <Header />
      <Main />
      <Slyder />
      <Newsletter />
      <Footer />
      {showButton && (
        <button onClick={scrollToTop} className="scrollToTopButton">
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      )}
    </div>
  );
}

export default App;
