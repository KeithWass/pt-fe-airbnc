import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <button>
          <img src="../src/images/logo.png" width={105} height={105} />
        </button>
      </Link>
      <h1>airbnc</h1>
    </div>
  );
}
