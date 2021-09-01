import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import Payment from "./components/Payment";
import Principles from "./components/Principles";
import Profile from "./components/Profile";
import Share from "./components/Share";
import './styles/GlobalCss.css';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Share />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Payment />
      <div className="divider" />
      <Principles />
      <div className="divider" />
      <News />
      <Footer />
    </>
  );
}

export default App;
