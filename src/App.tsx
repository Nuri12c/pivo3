import "./styles/App.scss";
import "./styles/normalyze.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Slyder } from "./components/Slyder/Slyder";
import { Newsletter } from "./components/news/newsletter.tsx";
function App() {
   
   
  return (
    <div className="body-main">
      <Header />
      <Main />
      <Slyder />
      <Newsletter />
      <Footer />
      
    </div>
  );
}

export default App;
