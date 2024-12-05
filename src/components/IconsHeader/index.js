import './style.css';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icons = [perfil, sacola]

export default function IconsHeader(){
  return (
    <>
     <ul className="icons-header">
        { icons.map( (e) => (
          <li><img src={e}></img></li>
        ))}
       </ul>
    </>
  )
}