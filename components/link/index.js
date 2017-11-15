import LinkNext from 'next/link';
import styled from 'styled-components';

function LinkComponent({ href, children, className }) {
  return (
    <LinkNext href={href || 'dassdasa'}>
      <Link className={className} href={href}>{children}</Link>
    </LinkNext>
  );
}

const Link = styled.a` 
  box-sizing: border-box;  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${props => props.width || ''};
  padding: 10px 20px;
  border: 1px solid #2196F3;
  border-radius: 3px;
  cursor: pointer;
  color: #2196F3;
  transition: background-color, border-color, color .4s;
  
  &:hover {
    background-color:  #2196F3;
    border-color: #fff;
    color: #fff;
  }
`;

export default LinkComponent;
