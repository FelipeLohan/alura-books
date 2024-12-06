
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
   display: flex;
  align-items: center;
  gap: 10px;
  font-size: 4vmin;
`

const LogoImage = styled.img`
  width: 6vmin;
`

 export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo-site" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}
