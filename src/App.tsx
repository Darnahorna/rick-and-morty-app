import "./App.css";
import { data } from "../api/getCherecters.tsx";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Card, Character } from "./components/Card/Card.tsx";
import { Pagination } from "./components/Pagination/Pagination.tsx";
import { Controllers } from "./components/Controllers/Controllers.tsx";

function App() {
  const fetchedCharacters: any = data;
  const [characters, setCharacters] = useState(fetchedCharacters.results);

  return (
    <div className="wrapper">
      <Navigation />
      <main className="content">
        <header>Locations</header>
        <Controllers />
        <section className="parent-grid">
          {characters.map((item: Character) => {
            return <Card item={item} key={item.id} />;
          })}
        </section>
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default App;
