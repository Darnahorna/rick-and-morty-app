import "./App.css";
import { Suspense } from "react";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader.tsx";
import promo from "../public/cover.png";
import { CardContainer } from "./components/CardContainer/CardContainer.tsx";

function App() {
  return (
    <>
      <header>
        <img src={promo} className="img_promo" />
      </header>

      <div className="wrapper">
        <Suspense fallback={<Preloader />}>
          <Router>
            <Navigation />
            <main className="content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <CardContainer contentType="character" key="character" />
                  }
                ></Route>
                <Route
                  path="/locations"
                  element={
                    <CardContainer contentType="location" key="location" />
                  }
                ></Route>
                <Route
                  path="/episodes"
                  element={
                    <CardContainer contentType="episode" key="episode" />
                  }
                ></Route>
              </Routes>
            </main>
          </Router>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
