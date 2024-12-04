import "./style.css";
import logo from '../../images/logo.svg';

 export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo-site"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}
