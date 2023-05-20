import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchFlights from "./components/SearchFlights/SearchFlights";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <SearchFlights />
    </div>
  );
}

export default App;
