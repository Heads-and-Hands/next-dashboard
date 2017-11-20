import LinkNext from 'next/link';
import styled from 'styled-components';

function LinkComponent({
  href, children, className, as, 
}) {
  console.warn(as, href);
  return (
    <LinkNext href={href || '/sadsadsas'} as={as}>
      <Link className={className} href={href}>{children}</Link>
    </LinkNext>
  );
}


const Link = styled.a`
  margin-bottom: 15px;
  color: #fff;s
  text-decoration: none;
  &:hover {
    color: #faa;
  }
`;

export default LinkComponent;
