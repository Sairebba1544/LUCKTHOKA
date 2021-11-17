import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Maincontent from "./maincontent";
import History from "./history";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <Maincontent />
      {/* <History /> */}
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Maincontent />} />
          <Route exact path="/History" element={<History />} />
        </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
