import "./App.scss";
import { Home } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
