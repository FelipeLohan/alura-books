import { livros } from "./LatestReleasesData.js";
import styled from "styled-components";

const LatestReleasesContainer = styled.section`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #00ffff;
    font-size: 4vmin;
  }
`;

const LatestReleasesBooksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const LatestReleasesBooksCard = styled.div`
  background-color: #07253b;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;

  p {
    color: #fff;
  }
`
export default function LatestReleases() {
  return (
    <LatestReleasesContainer>
      <h2>Ultimos lançamentos</h2>
      <LatestReleasesBooksContainer>
        {livros.map((e) => {
          return (
            <LatestReleasesBooksCard>
              <p>{e.nome}</p>
              <img src={e.src} />
            </LatestReleasesBooksCard>
          );
        })}
      </LatestReleasesBooksContainer>
    </LatestReleasesContainer>
  );
}
