import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  background: ${({ theme }) => theme.bgColor};
  @media screen {
    width: 24.4rem;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
