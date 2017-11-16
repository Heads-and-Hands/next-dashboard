import styled from 'styled-components';

import Link from '../link';


function Sidebar({ links }) {
  return (
    <Wrapper className={this.props.className}>
      <Link href="/"> Главная </Link>
      {
        links.map(item => 
          (
            <li key={item.path}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 100px 30px;
width: 100%;
height: 100vh;
background: #1d4870;
`;

export default Sidebar;
