import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <button>
          <img src="../src/images/logo.svg" width={105} height={105} />
        </button>
      </Link>
      <Link to="/">
        <button>
          <h1>airbnc</h1>
        </button>
      </Link>
    </div>
  );
}
