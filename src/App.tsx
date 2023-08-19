import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <nav>
          <div>
            <span className="logo">
              <a href="" className="link-logo">
                The Rick and Morty
              </a>
            </span>
          </div>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav-list">
            <li>
              <a href="">Characters</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Episodes</a>
            </li>
          </ul>
        </nav>

        <main className="content">
          <header>Locations</header>
          <section className="controllers">
            <div className="filter">
              <select name="locations" id="locations">
                <option value="vname1">vname1</option>
                <option value="vname2">vname2</option>
                <option value="vname3">vname3</option>
                <option value="vname4">vname4</option>
              </select>
            </div>
            <div className="sorting">
              <select name="sort" id="sort">
                <option value="vname1">A-Z</option>
                <option value="vname2">Z-A</option>
              </select>
            </div>
            <div className="search">
              <input type="search" placeholder="Search..." />
              <span className="material-symbols-outlined"> search </span>
            </div>
          </section>
          <section className="parent-grid">
            <article className="grid-item">
              <div className="card-img">
                <img src="./public/mushrooms.webp" />
              </div>
              <div className="item-description">
                <div className="section">
                  <a href="">
                    <h3>Secret Service Rick</h3>
                  </a>
                  <span className="status">
                    <span className="status-icon"></span> Alive - Human
                  </span>
                </div>
                <div className="section">
                  <span className="text-gray">Last known location:</span>
                  <a href="">Citadel of Ricks</a>
                </div>
                <div className="section">
                  <span className="text-gray">First seen in:</span>
                  <a href="">The Ricklantis Mixup</a>
                </div>
              </div>
            </article>
            <article className="grid-item">
              <div className="card-img">
                <img src="./public/mushrooms.webp" />
              </div>
              <div className="item-description">
                <div className="section">
                  <a href="">
                    <h3>Secret Service Rick</h3>
                  </a>
                  <span className="status">
                    <span className="status-icon"></span> Alive - Human
                  </span>
                </div>
                <div className="section">
                  <span className="text-gray">Last known location:</span>
                  <a href="">Citadel of Ricks</a>
                </div>
                <div className="section">
                  <span className="text-gray">First seen in:</span>
                  <a href="">The Ricklantis Mixup</a>
                </div>
              </div>
            </article>
            <article className="grid-item">
              <div className="card-img">
                <img src="./public/mushrooms.webp" />
              </div>
              <div className="item-description">
                <div className="section">
                  <a href="">
                    <h3>Secret Service Rick</h3>
                  </a>
                  <span className="status">
                    <span className="status-icon"></span> Alive - Human
                  </span>
                </div>
                <div className="section">
                  <span className="text-gray">Last known location:</span>
                  <a href="">Citadel of Ricks</a>
                </div>
                <div className="section">
                  <span className="text-gray">First seen in:</span>
                  <a href="">The Ricklantis Mixup</a>
                </div>
              </div>
            </article>
            <article className="grid-item">
              <div className="card-img">
                <img src="./public/mushrooms.webp" />
              </div>
              <div className="item-description">
                <div className="section">
                  <a href="">
                    <h3>Secret Service Rick</h3>
                  </a>
                  <span className="status">
                    <span className="status-icon"></span> Alive - Human
                  </span>
                </div>
                <div className="section">
                  <span className="text-gray">Last known location:</span>
                  <a href="">Citadel of Ricks</a>
                </div>
                <div className="section">
                  <span className="text-gray">First seen in:</span>
                  <a href="">The Ricklantis Mixup</a>
                </div>
              </div>
            </article>
          </section>
          <section className="pagination">
            <button>prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>next</button>
          </section>
        </main>

        <footer className="footer">
          <hr className="hr-line" />
          <p>
            Coded by
            <a
              href="https://www.linkedin.com/in/daria-nahorna-4a39511b0/"
              target="_blank"
            >
              Daria Nahorna
            </a>
            -
            <a
              href="https://github.com/Darnahorna/rick-and-morty-app"
              target="_blank"
            >
              source code
            </a>
          </p>
          <span>darnahorna@gmail.com</span>
        </footer>
      </div>
    </>
  );
}

export default App;
