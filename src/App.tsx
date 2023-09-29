import { Suspense, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardContainer } from "./components/CardContainer/CardContainer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

import Preloader from "./components/common/Preloader/Preloader.tsx";
import promo from "./assets/cover.png";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import { CharacterPage } from "./pages/CharactersPage/CharacterPage.tsx";

import "./App.css";
import HomePage from "./pages/HomePage.tsx/HomePage.tsx";

function App() {
  const GlobalStateContext = createContext<{ foo: string } | null>(null);
  return (
    <>
      <GlobalStateContext.Provider value={{ foo: "bar" }}>
        <header>
          <img src={promo} className="img_promo" />
        </header>

        <div className="wrapper">
          <Suspense fallback={<Preloader />}>
            <Router>
              <Navigation />
              <main className="content">
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route
                    path="/characters"
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
      </GlobalStateContext.Provider>
    </>
  );
}

export default App;
