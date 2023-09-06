import "./App.css";
import { Suspense } from "react";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharactersContainer } from "./components/Characters/CharactersContainer.tsx";
import { LocationContainer } from "./components/Locations/LocationContainer.tsx";
import Preloader from "./components/Preloader/Preloader.tsx";
import { EpisodeContainer } from "./components/Episodes/EpisodeContainer.tsx";

function App() {
  return (
    <>
      <header>
        <img src="public/cover.png" className="img_promo" />
      </header>

      <div className="wrapper">
        <Suspense fallback={<Preloader />}>
          <Router>
            <Navigation />
            <main className="content">
              <Routes>
                <Route index path="/" element={<CharactersContainer />}></Route>
                <Route
                  path="/locations"
                  element={<LocationContainer />}
                ></Route>
                <Route path="/episodes" element={<EpisodeContainer />}></Route>
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
