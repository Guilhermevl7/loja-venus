import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>
        &copy; Todos os direitos reservado a Vênus Handmade. Proibida reprodução
        total ou parcial. Preços e condições válidos somente para Loja Virtual,
        sujeitos a alterações sem aviso prévio.
      </footer>
    </div>
  );
}

export default App;
