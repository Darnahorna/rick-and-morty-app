import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardContainer } from "./components/CardContainer/CardContainer.tsx";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import Preloader from "./components/common/Preloader/Preloader.tsx";
import promo from "./assets/logo.png";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import { CharacterPage } from "./pages/CharactersPage/CharacterPage.tsx";
import HomePage from "./pages/HomePage.tsx/HomePage.tsx";

import "./App.css";
import { CharacterContainer } from "./components/CardContainer/CharacterContainer.tsx";
import GlobalStateProvider from "./hooks/globalState.tsx";
import Favorites from "./pages/FavoritesPage/Favorites.tsx";

function App() {
  return (
    <>
      <GlobalStateProvider>
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
                    element={<CharacterContainer />}
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
                  <Route path="/favorites" element={<Favorites />}></Route>
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
            </Router>
          </Suspense>
          <Footer />
        </div>
      </GlobalStateProvider>
    </>
  );
}

export default App;
