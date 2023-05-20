import styles from "./App.module.css";
import SearchFlights from "./components/SearchFlights/SearchFlights";
import Flights from "./components/Flights/Flights";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Router>
        <Routes>
          <Route path="/" element={<SearchFlights />} />
          <Route path="/search" element={<Flights />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
