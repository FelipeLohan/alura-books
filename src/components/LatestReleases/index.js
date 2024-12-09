import { livros } from "./LatestReleasesData.js";

export default function LatestReleases() {
  return (
      <section>
        <h2>Ultimos lançamentos</h2>
        {livros.map(e => {
          <img src={e.src} />
        })}
      </section>
    
  );
}
