import Input from '../Input/index.js';
import styled from 'styled-components';
import { useState } from 'react';

const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
    align-itens: center;
    padding: 20px;
`

let inputValue;

export default function Pesquisa(){
  const [textoDigitado, setTextoDigitado] = useState("")

  return (
    <>
    <SearchContainer>
      <Input placeholder='Busque por um livro' onBlur={(e) => setTextoDigitado(e.target.value)}/>
    </SearchContainer>
    </>
  )
}