import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./router";
import styles from "./style";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Router />
      </div>
    </div>

    <Footer />
  </div>
);

export default App;
