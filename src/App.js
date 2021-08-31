import Contact from "./components/Contact";
import Header from "./components/Header";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Share from "./components/Share";
import './styles/GlobalCss.css';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Share />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Payment />
      <div className="divider" />
    </div>
  );
}

export default App;
