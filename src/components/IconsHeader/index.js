import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul`
display: flex;
  gap: 30px;
  align-items: center;
`

const Icon = styled.li`
  cursor: pointer
`


const icons = [perfil, sacola]

export default function IconsHeader(){
  return (
    <>
     <Icons>
        { icons.map( (e) => (
          <Icon><img src={e}></img></Icon>
        ))}
       </Icons>
    </>
  )
}