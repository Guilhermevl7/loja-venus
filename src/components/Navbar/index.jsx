import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          display: "block",
          margin: "auto",
          padding: "30px",
          width: "50%",
          justifyContent: "center",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          Início
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Produtos</button>
          <div className="dropdown-content">
            <ul>
              <li>
                <Link
                  to={"biquinis"}
                  style={{ color: "black", backgroundColor: "transparent" }}
                >
                  Biquínis
                </Link>
              </li>
              <li>
                <Link
                  to={"tops"}
                  style={{ color: "black", backgroundColor: "transparent" }}
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  to={"saias"}
                  style={{ color: "black", backgroundColor: "transparent" }}
                >
                  Saias
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
          {" "}
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
