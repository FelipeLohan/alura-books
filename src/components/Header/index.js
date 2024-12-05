
import Logo from "../logo/index.js";
import OptionsHeader from "../OptionsHeader/index.js";
import IconsHeader from "../IconsHeader/index.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <OptionsHeader />
        <IconsHeader />
      </HeaderContainer>
    </>
  );
}
