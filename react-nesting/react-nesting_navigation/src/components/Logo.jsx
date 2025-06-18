import { Image } from "./Image.jsx";
import { Link } from "./Link.jsx";
import logo from "../img/logo.jpg";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
