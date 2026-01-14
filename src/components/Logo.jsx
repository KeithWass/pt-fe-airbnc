import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import "./Header.css";

export default function Logo() {
  return (
    <Link to="/" className="logo-link">
      <LogoIcon />
    </Link>
  );
}
