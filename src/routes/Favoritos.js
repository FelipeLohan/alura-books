import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFavoriteBooks } from "../services/favoritos";
import LivroImg from "../images/livro.png";

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
  background-color: #07253b;
  border-radius: 6px;

  p{
  color: white;

  }

  &:hover{
    border: 1px solid white;
    cursor: pointer;
  }
`;

const TituloContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  font-size: 5vmin;
  color: white;
`


function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const favoritesApi = await getFavoriteBooks();
    setFavorites(favoritesApi);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      <TituloContainer>
      <h2>Seus livros favoritos</h2>
      </TituloContainer>
      <ResultContainer>
        {favorites.map((e) => (
          <ResultCard>
            <img src={LivroImg} />
            <p>{e.nome}</p>
          </ResultCard>
        ))}
      </ResultContainer>
    </AppContainer>
  );
}

export default Favoritos;
