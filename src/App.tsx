import { Link, Outlet } from "react-router-dom";
import "./assets/CSS/App.css";

function App() {
  return (
    <>
      <nav>
        <Link id="link" to="/">
          Home
        </Link>
        <Link id="link" to="/card">
          Card
        </Link>
      </nav>
      <main>
        {/* Outlet nous permet d'afficher les information des pages */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
