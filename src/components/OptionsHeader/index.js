import styled from 'styled-components';

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

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function OptionsHeader() {
  return (
    <>
      <OptionsNavContainer>
        {optionsText.map((e) => (
          <li>
            <OptionItem>{e}</OptionItem>
          </li>
        ))}
      </OptionsNavContainer>
    </>
  );
}
