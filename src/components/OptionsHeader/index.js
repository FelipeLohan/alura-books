import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsNavContainer = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`

const OptionItem = styled.p`
font-size: 2vmin;
text-align: center;
cursor: pointer;
`

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

export default function OptionsHeader() {
  return (
    <>
      <OptionsNavContainer>
        {optionsText.map((e) => (
          <li>
           <Link to={`/${e.toLowerCase()}`}><OptionItem>{e}</OptionItem></Link> 
          </li>
        ))}
      </OptionsNavContainer>
    </>
  );
}
