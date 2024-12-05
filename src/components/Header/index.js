import './style.css';
import Logo from "../logo/index.js";
import OptionsHeader from "../OptionsHeader/index.js";
import IconsHeader from "../IconsHeader/index.js";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <Logo />
        <OptionsHeader />
        <IconsHeader />
      </header>
    </>
  );
}
