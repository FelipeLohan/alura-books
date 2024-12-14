import Input from "../Input/index.js";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "../../services/books.js";
import { postFavoriteBook } from "../../services/favoritos.js";
import LivroImg from '../../images/livro.png';

const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  align-itens: center;
  padding: 20px;
  margin-bottom: 50px;
`;

const LivrosContainer = styled.section`
  display: flex;
  width: 30%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  gap: 30px;
`

const LivroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-itens: center;
  justify-content: center;
  background-color: #07253b;
  border-radius: 6px;
  padding: 40px;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

const TituloLivro = styled.p`
  font-size: 3vmin;
  color: #fff;
`

const CapaLivro = styled.img`
  width: 30%;
  display: block;
  margin: 0 auto;
`
export default function Pesquisa() {
  const [livroPesquisado, setLivroPesquisado] = useState([]);
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks() {
    const booksOfApi = await getBooks()
    setLivros(booksOfApi)
  }

  async function insertFavorite(id){
    await postFavoriteBook(id)
    alert('Livro inserido')
  }

  return (
    <>
      <SearchContainer>
        <Input
          placeholder="Busque por um livro"
          onBlur={(e) => {
            const textoDigitado = e.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome.includes(textoDigitado)
            );
            setLivroPesquisado(resultadoPesquisa);
          }}
        />
        </SearchContainer>
        
        <LivrosContainer>
      {livroPesquisado.map((livro) => (
          <LivroCardContainer onClick={() => insertFavorite(livro.id)}>
            <TituloLivro>{livro.nome}</TituloLivro>
            <CapaLivro src={LivroImg} />
          </LivroCardContainer>
        ))}
        </LivrosContainer>
    </>
  );
}
