import styled, { css } from 'styled-components';
import { Outlet, useLocation } from 'react-router';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_top.svg';
import Category from '../components/common/Category';
import ScrollTopButton from '../components/common/ScrollTopButton';

const TopBlock = styled(Responsive)`
  ${(props) =>
    props.page === '/top/user' &&
    css`
      background: ${({ theme }) => theme.navColor};
    `}
`;

const Top = () => {
  const { pathname } = useLocation();
  return (
    <section className="top">
      <TopBlock page={pathname}>
        <Banner style={{ width: '24.4rem' }} />
        <Category />
        <ScrollTopButton position={1000} />
        <Outlet />
      </TopBlock>
    </section>
  );
};

export default Top;
