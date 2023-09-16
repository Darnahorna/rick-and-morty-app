import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardContainer } from "./components/CardContainer/CardContainer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

import Preloader from "./components/common/Preloader/Preloader.tsx";
import promo from "./assets/cover.png";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import { CharacterPage } from "./pages/ItemsPage/CharacterPage.tsx";

import "./App.css";

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
                <Route path="/characters/:id" element={<CharacterPage />} />
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
                <Route path="*" element={<ErrorPage />} />
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
