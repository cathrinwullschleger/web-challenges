import "./styles.css";
import { Header } from "./components/Header.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Link } from "./components/Link.jsx";
import { Image } from "./components/Image.jsx";
import { Logo } from "./components/Logo.jsx";
import { Avatar } from "./components/Avatar.jsx";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <Logo>
          <Link href="#">
            <Image src={logo} alt="logo" />
          </Link>
        </Logo>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Avatar>
          <button
            type="button"
            onClick={() => console.log("I could toggle a profile!")}
            aria-label="toggle profile"
          >
            <Image src={avatar} alt="avatar" />
          </button>
        </Avatar>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
