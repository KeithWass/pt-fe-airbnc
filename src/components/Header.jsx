import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <button>
          <img src="../src/images/logo.png" width={110} height={110} />
        </button>
      </Link>
      <h1>Welcome to airbNC!</h1>
    </div>
  );
}
