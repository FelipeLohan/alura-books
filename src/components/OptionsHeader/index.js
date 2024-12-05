import './style.css';
const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function OptionsHeader() {
  return (
    <>
      <ul className="options-header">
        {optionsText.map((e) => (
          <li>
            <p>{e}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
