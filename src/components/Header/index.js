import Logo from "../logo/index.js";
import OptionsHeader from "../OptionsHeader/index.js";
import IconsHeader from "../IconsHeader/index.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;

  a {
  text-decoration: none;
  color: black;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <OptionsHeader />
        <IconsHeader />
      </HeaderContainer>
    </>
  );
}
